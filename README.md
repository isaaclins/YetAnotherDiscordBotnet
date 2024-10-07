# YetAnotherFrontend


## Overview
<table of contents>

## Supported Languages

| Language   | Support |
| ---------- | ------- |
| JavaScript | ❌      |
| TypeScript | ❌      |
| Python     | ❌      |
| Go         | ❌      |
| Rust       | ❌      |

## Modules Documentation

**Command**                            | **Description**
---------------------------------------|-----------------------------------
[.help](#help)                         | Shows this message
[.ping](#ping)                         | Latency delay of the bot
[.cd `<directory>`](#change-directory) | Change Directory
[.ls](#list-directory)                 | List Directory
[.export `<file>`](#export-file-into-link) | Export File into link
[.upload `<link>`](#upload-file-from-link) | Upload File from link
[.cmd `<cmd>`](#execute-cmd-command)   | Execute CMD Command
[.run `<file>`](#run-a-file)           | Run a File
[.ss](#take-a-screenshot-of-the-first-monitor) | Take a Screenshot of the first monitor
[.blue](#send-a-bluescreen)            | Sends a bluescreen ;)
[.start](#add-the-bot-to-the-startup-directory) | Adds the bot to the startup directory
[.exit](#close-the-connection-to-the-bot) | Closes the connection to the bot
[.reload](#reload-the-connection-to-the-bot) | Reloads the connection to the bot
[.volumeup](#increase-the-volume)      | Increase the system volume
[.volumedown](#decrease-the-volume)    | Decrease the system volume
[.admincheck](#check-admin-privileges) | Check admin privileges
[.location](#get-location-information) | Get location information
[.clipboard](#get-clipboard-content)   | Get clipboard content
[.wallpaper `<image_file>`](#change-wallpaper)       | Change wallpaper
[.shell](#execute-shell-command)       | Execute shell command
[.input](#send-keystrokes)             | Send keystrokes
[.type](#type-text)                    | Type text
[.say](#text-to-speech)                | Text to speech
[⚠.message⚠](#display-message-box)       | Display message box (WIP)
[⚠.mouse⚠](#display-mouse-grid)          | Display mouse grid (WIP)

### Modules<a name="modules"></a>

#### .help<a name="help"></a>

Displays a list of available commands with their descriptions.

**Example:**
```
YOU>.help
CLIENT>
.help               - Shows this message
.ping               - Latency delay of the bot
.cd <directory>     - Change Directory
.ls                 - List Directory
.export <file>      - Export File into link
.upload <link>      - Upload File from link
.cmd <cmd>          - Execute CMD Command
.run <file>         - Run a File
.ss                 - Take a Screenshot of the screen
.blue               - Sends a bluescreen ;)
.start              - Adds the bot to the startup DIR
.exit               - Closes the connection to the bot
.reload             - Reloads the connection to the bot
.volumeup           - Increase the system volume
.volumedown         - Decrease the system volume
.admincheck         - Check admin privileges
.location           - Get location information
.clipboard          - Get clipboard content
.wallpaper          - Change wallpaper
.export             - Export file into link
.upload             - Upload file from link
.shell              - Execute shell command
.run                - Run command
.cd                 - Change directory
.input              - Send keystrokes
.type               - Type text
.say                - Text to speech
.message            - Display message box
.mouse              - Display mouse grid
```

#### .ping<a name="ping"></a>

Shows the latency delay of the bot in milliseconds.

**Example:**
```
YOU>.ping
CLIENT>
Pong!
jk here's the latency: 203ms
```

#### .cd \<directory\><a name="change-directory"></a>

Change the current working directory.

**Example:**
```
YOU>.cd C:\Users\Username\Documents
CLIENT>
Changed Directory > C:\Users\Username\Documents
```

#### .ls<a name="list-directory"></a>

List files in the current directory.

**Example:**
```
YOU>.ls
CLIENT>
Files > C:\Users\Username\Documents
file1.txt
file2.doc
```

#### .export \<file\><a name="export-file-into-link"></a>

Export a file and provide a link.

**Example:**
```
YOU>.export example.txt
CLIENT>
Export
https://example.com/file.txt
```

#### .upload \<link\><a name="upload-file-from-link"></a>

Upload a file from a provided link.

**Example:**
```
YOU>.upload https://example.com/file.txt
CLIENT>
Uploaded file in current directory:
C:/example/directory/example.txt
```

#### .cmd \<cmd\><a name="execute-cmd-command"></a>

Execute a command using CMD.

**Example:**
```
YOU>.cmd ipconfig
CLIENT>
CMD Output:
Windows IP Configuration
...
```

#### .run \<file\><a name="run-a-file"></a>

Run an executable file.

**Example:**
```
.run program.exe
```
(no output)
#### .ss<a name="take-a-screenshot-of-the-first-monitor"></a>

Take a screenshot of the first monitor.

**Example:**
```
YOU>.ss
CLIENT>
(Screenshot of Desktop)
```

#### .blue<a name="send-a-bluescreen"></a>

Trigger a bluescreen on the system.

**Example:**
```
YOU>.blue
CLIENT>
Attempting...
Blue Successful!
```

#### .start<a name="add-the-bot-to-the-startup-directory"></a>

Add the bot to the system's startup directory.

**Example:**
```
YOU>.start
CLIENT>
Bot added to startup directory
```

#### .exit<a name="close-the-connection-to-the-bot"></a>

Close the connection to the bot.

**Example:**
```
YOU>.exit
CLIENT>
Connection closed
```

#### .reload<a name="reload-the-connection-to-the-bot"></a>

Reload the connection to the bot.

**Example:**
```
YOU>.reload
CLIENT>
Reloading, please be patient...
Connection reloaded
```

#### .volumeup<a name="increase-the-volume"></a>

Increase the system volume to 100%.

**Example:**
```
YOU>.volumeup
CLIENT>
Volume is set to 100%
```

#### .volumedown<a name="decrease-the-volume"></a>

Decrease the system volume to 0%.

**Example:**
```
YOU>.volumedown
CLIENT>
Volume is set to 0%
```

#### .admincheck<a name="check-admin-privileges"></a>

Check if the bot has admin privileges.

**Example:**
```
YOU>.admincheck
CLIENT>
Congrats, you're admin
```

#### .location<a name="get-location-information"></a>

Get the current geolocation information.

**Example:**
```
YOU>.location
CLIENT>
Location: http://www.google.com/maps/place/latitude,longitude
```

#### .clipboard<a name="get-clipboard-content"></a>

Get the content of the system clipboard.

**Example:**
```
YOU>.clipboard
CLIENT>
Clipboard content is:
This is clipboard text
```

#### .wallpaper<a name="change-wallpaper"></a>

Change the system wallpaper.

**Example:**
```
YOU>.wallpaper <attached image>
CLIENT>
Changed wallpaper
```

#### .input<a name="send-keystrokes"></a>

Send a combination of keystrokes.

**Example:**
```
YOU>.input Ctrl Alt Delete
CLIENT>
Sent keystroke: Ctrl+Alt+Delete
```

#### .type<a name="type-text"></a>

Type specified text as if it were typed by a keyboard.

**Example:**
```
YOU>.type Hello, World!
CLIENT>
Sent: Hello, World!
```

#### .say<a name="text-to-speech"></a>

Convert text to speech and play it.

**Example:**
```
YOU>.say Hello, how are you?
CLIENT>
Just said: Hello, how are you?
```
#### .shell<a name="execute-shell-command"></a>

Execute a shell command on the system.

**Example:**
```
.shell dir
CLIENT>
(shell output)
```

#### .run<a name="run-command"></a>

Run a command on the system using subprocess.

**Example:**
```
.run notepad.exe
(no output)
```

## ⚠ WIP ⚠: 
#### .message<a name="display-message-box"></a>

Display a message box on the system.

#### .mouse<a name="display-mouse-grid"></a>

Display a grid on the screen to help locate the mouse pointer.

**Example:**
```
.mouse large
```

**Note:** The `large` argument specifies the size of

 the grid (`large`, `medium`, `small`, `tiny`).

## Code Guidelines

When contributing, please adhere to the following guidelines:

- Follow best coding practices relevant to the programming language used.
- Write clear and meaningful commit messages.
- Keep your codebase well-documented.
- Ensure your changes do not break existing functionality.
- Use common sense to make decisions that contribute to the overall improvement of the project.

Thank you for considering contributing to our project! Your efforts help make this project better for everyone <br>
I will try to give you credits for what you did and how it helped in the project!
 
