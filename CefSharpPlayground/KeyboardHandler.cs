using System;
using System.Diagnostics;
using System.Windows.Forms;
using CefSharp;

namespace CefSharpPlayground {
  public class KeyboardHandler : IKeyboardHandler {
    #region Methods
    public bool OnKeyEvent(IWebBrowser browserControl, IBrowser browser, KeyType type, int windowsKeyCode, int nativeKeyCode, CefEventFlags modifiers,
                           bool isSystemKey) {
      var result = false;
      const int F12 = 0x7B;

      Debug.WriteLine($"OnKeyEvent: KeyType: {type} 0x{windowsKeyCode:X} Modifiers: {modifiers}");

      if (windowsKeyCode == F12 && type == KeyType.KeyUp) {
        //browserControl.ShowDevTools();
        Process.Start("chrome.exe", "http://localhost:8088 --new-window --window-size=800,600");
        result = true;
      }

      // TODO: Handle MessageNeeded cases here somehow.
      return result;
    }


    public bool OnPreKeyEvent(IWebBrowser browserControl, IBrowser browser, KeyType type, int windowsKeyCode, int nativeKeyCode,
                              CefEventFlags modifiers, bool isSystemKey, ref bool isKeyboardShortcut) {
      return false;
    }
    #endregion
  }
}
