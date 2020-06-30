# Why is my editor broken?

Recently, I updated my `~/.gitconfig` to change my editor from the long-standing TextMate to VSCode (since it's the editor I use for work, now). 

Except when I changed `editor = mate` to `editor = code`, I couldn't rebase anymore. When the file opened in VSCode, I just see a blank screen.

So, I changed it back to `editor = mate`, but that doesn't work, now, _either_. 

_SUPER_ 😕

My mission is to figure out wtf happened… 

**Solution…**
Turns out, I needed to add `-w` to the `editor` assignment. I thought I remembered seeing it from when I changed it to `code` in the first place, so it's the first thing I tried, then I went looking for why… 

The `-w` is a flag telling the editor to wait for files to be closed before returning (to Terminal). That seems to be it? Weird.