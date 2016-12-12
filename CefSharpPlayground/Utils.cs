using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Resources;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace CefSharpPlayground {
  public static class Utils {
    public static Stream GetResourceStream(string pathToResource) {
      string resourcePath = "pack://application:,,,/" + pathToResource;
      Debug.WriteLine(resourcePath);
      Uri resourceUri = new Uri(resourcePath);
      try {
        return Application.GetResourceStream(resourceUri)?.Stream;
      }
      catch(IOException) {
        return null;
      }
    }
  }
}
