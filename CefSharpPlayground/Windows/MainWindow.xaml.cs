using System;
using System.Diagnostics;
using System.IO;
using System.Windows;
using System.Windows.Forms;
using System.Windows.Input;
using CefSharp;
using CefSharp.WinForms;
using CefSharpPlayground.Windows.CefHandlers;
using CefSharpPlayground.Windows.CustomControls;
using Application = System.Windows.Application;
using KeyEventArgs = System.Windows.Forms.KeyEventArgs;

namespace CefSharpPlayground {
  /// <summary>
  ///   Interaction logic for MainWindow.xaml
  /// </summary>
  public partial class MainWindow : CustomChromeWindow {
    #region Fields
    public ChromiumWebBrowser Browser;
    #endregion

    #region Properties
    private string StartUrl {
      get {
#if DEBUG
        var path = System.Reflection.Assembly.GetExecutingAssembly().Location;
        var newPath = Path.GetFullPath(Path.Combine(path, @"..\..\..\..\CefSharpPlayGroundClient\index.html"));
        Debug.WriteLine(newPath);
        return newPath;
#else
        return "app://app/index.html";
#endif

      }
    }
    #endregion

    #region Constructors
    public MainWindow() {
      InitializeComponent();
    }
    #endregion

    #region Methods
    protected override void OnClosed(EventArgs e) {
      base.OnClosed(e);

      Application.Current.Shutdown();
      Process.GetCurrentProcess().Kill();
    }

    // Winform KeyDown Handler
    private void MainWindow_KeyDown(object sender, KeyEventArgs e) {
      Debug.WriteLine(e.KeyCode.ToString());
      if (e.KeyCode == Keys.F12) {
        Debug.WriteLine("F12 Pressed!");
        Browser.ShowDevTools();
      }
    }


    // WPF KeyDown Handler
    private void MainWindow_KeyDown(object sender, System.Windows.Input.KeyEventArgs e) {
      Debug.WriteLine(e.Key.ToString());
      if (e.Key == Key.F12) {
        Debug.WriteLine("F12 Pressed!");
        Browser.ShowDevTools();
      }
    }


    private void Window_Loaded(object sender, RoutedEventArgs e) {
      Debug.WriteLine("Window Loaded");
      //KeyDown += MainWindow_KeyDown;
      Browser = new ChromiumWebBrowser(StartUrl);
      Browser.KeyDown += MainWindow_KeyDown;
      Browser.RegisterJsObject("App", new Backend.App());
      Browser.KeyboardHandler = new KeyboardHandler();
      Browser.BrowserSettings.BackgroundColor = Convert.ToUInt32("FF1D1D1D", 16);
      WfHost.Child = Browser;
    }
    #endregion
  }
}
