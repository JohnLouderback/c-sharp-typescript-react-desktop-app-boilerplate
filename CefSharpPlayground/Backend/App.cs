using System.Windows;

namespace CefSharpPlayground.Backend {
  class App {
    public bool DisplayMessage(string message) {
      MessageBox.Show("Hello", message);
      return true;
    }
  }
}
