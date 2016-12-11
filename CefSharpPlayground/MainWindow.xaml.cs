using System.Diagnostics;
using System.IO;
using System.Windows;
using System.Windows.Forms;
using System.Windows.Input;
using CefSharp;
using CefSharp.WinForms;
using KeyEventArgs = System.Windows.Forms.KeyEventArgs;

namespace CefSharpPlayground {
  /// <summary>
  ///   Interaction logic for MainWindow.xaml
  /// </summary>
  public partial class MainWindow : Window {
    #region Fields
    public ChromiumWebBrowser Browser;
    #endregion

    #region Properties
    private string StartUrl {
      get {
        var path = System.Reflection.Assembly.GetExecutingAssembly().Location;
        var newPath = Path.GetFullPath(Path.Combine(path, @"..\..\..\..\CefSharpPlayGroundClient\index.html"));
        Debug.WriteLine(newPath);
        return newPath;
      }
    }
    #endregion

    #region Constructors
    public MainWindow() {
      InitializeComponent();
    }
    #endregion

    #region Methods

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
      KeyDown += MainWindow_KeyDown;
      Browser = new ChromiumWebBrowser(StartUrl);
      Browser.KeyDown += MainWindow_KeyDown;
      Browser.RegisterJsObject("App", new Backend.App());
      Browser.KeyboardHandler = new KeyboardHandler();
      WfHost.Child = Browser;
    }
    #endregion
  }
}
