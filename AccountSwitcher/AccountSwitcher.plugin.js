/**
* @name AccountSwitcher
* @displayName AccountSwitcher
* @source https://github.com/an0n-y-m0us/BetterDiscord/blob/main/AccountSwitcher/AccountSwitcher.plugin.js
* @authorId 875842632725704734
* @invite krkxqqDzTF
*/
/*@cc_on
@if (@_jscript)

  var shell = WScript.CreateObject("WScript.Shell")
  var fs = new ActiveXObject("Scripting.FileSystemObject");
	var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\BetterDiscord\plugins");
	var pathSelf = WScript.ScriptFullName;
  
  shell.Popup("It looks like you've mistakenly tried to run me directly. \n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
	if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
		shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
	} else if (!fs.FolderExists(pathPlugins)) {
		shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
	} else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
		fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);

		shell.Exec("explorer " + pathPlugins);
		shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
	}
	WScript.Quit();
  
@else@*/

module.exports = (() => {
  const config = {
    info: {
      name: "AccountSwitcher",
      authors: [
        {
          name: "Anonymous",
          discord_id: "875842632725704734",
          github_username: "an0n-y-m0us"
        }
      },
      version: "1.0.0",
      description: "Simply switch between accounts with the ease of pressing a single key.",
      github: "https://github.com/an0n-y-m0us/BetterDiscord/main/AccountSwitcher",
      github_raw:
