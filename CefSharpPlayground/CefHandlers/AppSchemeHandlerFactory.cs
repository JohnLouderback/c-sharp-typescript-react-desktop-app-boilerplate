using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CefSharp;

namespace CefSharpPlayground.CefHandlers {
  class AppSchemeHandlerFactory : ISchemeHandlerFactory {

    public static string SchemeName => "app";

    public IResourceHandler Create(IBrowser browser, IFrame frame, string schemeName, IRequest request) {
      Debug.WriteLine(request.Url);
      if (schemeName == SchemeName) {
        var path = new Uri(request.Url).LocalPath.TrimStart('/');
        var stream = Utils.GetResourceStream(Path.Combine("CefSharpPlaygroundClient", path));
        if (stream != null) {
          return ResourceHandler.FromStream(stream);
        }
      }
      return new ResourceHandler();
    }
  }
}
