#!/usr/bin/env python3
import sys
import json
import asyncio
import os
import edge_tts

sem = asyncio.Semaphore(16)

async def synthesize_one(req):
    req_id = req.get("id")
    text = req.get("text", "").strip()
    voice = req.get("voice", "de-DE-SeraphinaMultilingualNeural")
    rate = req.get("rate", "+0%")
    pitch = req.get("pitch", "+0Hz")
    out_path = req.get("outPath")

    if not text or not out_path:
        return {"id": req_id, "ok": False, "error": "Missing text or outPath"}

    async with sem:
        try:
            os.makedirs(os.path.dirname(out_path), exist_ok=True)
            tmp_path = f"{out_path}.{req_id}.tmp"
            communicate = edge_tts.Communicate(text=text, voice=voice, rate=rate, pitch=pitch)
            await communicate.save(tmp_path)
            os.replace(tmp_path, out_path)
            return {"id": req_id, "ok": True, "outPath": out_path}
        except Exception as e:
            return {"id": req_id, "ok": False, "error": str(e)}

async def handle_request(req):
    res = await synthesize_one(req)
    sys.stdout.write(json.dumps(res) + "\n")
    sys.stdout.flush()

async def main():
    loop = asyncio.get_running_loop()
    reader = asyncio.StreamReader()
    protocol = asyncio.StreamReaderProtocol(reader)
    await loop.connect_read_pipe(lambda: protocol, sys.stdin)

    sys.stdout.write(json.dumps({"ready": True}) + "\n")
    sys.stdout.flush()

    while True:
        line = await reader.readline()
        if not line:
            break
        raw = line.decode("utf-8", errors="replace").strip()
        if not raw:
            continue
        try:
            req = json.loads(raw)
        except Exception as e:
            sys.stdout.write(json.dumps({"ok": False, "error": f"Invalid JSON: {e}"}) + "\n")
            sys.stdout.flush()
            continue

        asyncio.create_task(handle_request(req))

if __name__ == "__main__":
    asyncio.run(main())
