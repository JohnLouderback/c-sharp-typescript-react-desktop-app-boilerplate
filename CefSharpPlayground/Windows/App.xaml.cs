using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Linq;
using System.Threading.Tasks;
using System.Windows;
using CefSharp;
using System.Windows.Forms;
using CefSharpPlayground.Windows.CefHandlers;
using Application = System.Windows.Application;

namespace CefSharpPlayground {
  /// <summary>
  /// Interaction logic for App.xaml
  /// </summary>
  public partial class App : Application {
    public App() {
      //Perform dependency check to make sure all relevant resources are in our output directory.
      var settings = new CefSettings();
      settings.CefCommandLineArgs.Add("enable-experimental-web-platform-features", "1");
      settings.SetOffScreenRenderingBestPerformanceArgs();
      settings.RemoteDebuggingPort = 8088;
      settings.RegisterScheme(new CefCustomScheme {
        SchemeName = AppSchemeHandlerFactory.SchemeName,
        SchemeHandlerFactory = new AppSchemeHandlerFactory()
      });
      Cef.Initialize(settings, performDependencyCheck: true, browserProcessHandler: null);
    }
  }
}
