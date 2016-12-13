using System;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Input;
using System.Windows.Media;

namespace CefSharpPlayground.Windows.CustomControls {
  /// <summary>
  /// Interaction logic for CustomChromeWindow.xaml
  /// </summary>
  public class CustomChromeWindow : Window {
    // Template Child Controls
    private CaptionButton closeButton;
    private CaptionButton minimizeButton;
    private CaptionButton maximizeButton;
    private Grid windowGrid;
    private Grid contentGrid;
    private Grid captionButtons;

    public static readonly DependencyProperty MenuProperty =
        DependencyProperty.Register("Menu", typeof(object), typeof(CustomChromeWindow), null);

    public object Menu {
      get { return GetValue(MenuProperty); }
      set { SetValue(MenuProperty, value); }
    }

    public CustomChromeWindow() {
      BuildControls();
    }

    private void BuildControls() {
      // Build window chrome values
      var windowChrome = new System.Windows.Shell.WindowChrome() {
        GlassFrameThickness = new Thickness(0, 0, 0, 1),
        ResizeBorderThickness = new Thickness(5),
        UseAeroCaptionButtons = false,
        CaptionHeight = 30
      };
      // Apply window chrome
      System.Windows.Shell.WindowChrome.SetWindowChrome(this, windowChrome);
      // Style Window
      Background = (SolidColorBrush)FindResource("LightBackground");
      BorderBrush = (SolidColorBrush)FindResource("WindowBorderColor");
      Style = (Style)FindResource("CustomChromeWindowStyle");
      BorderThickness = new Thickness(1);
    }

    public override void OnApplyTemplate() {
      // Get child controls from template
      maximizeButton = GetTemplateChild("maximizebutton") as CaptionButton;
      minimizeButton = GetTemplateChild("minimizebutton") as CaptionButton;
      closeButton = GetTemplateChild("closebutton") as CaptionButton;
      windowGrid = GetTemplateChild("WindowGrid") as Grid;
      contentGrid = GetTemplateChild("ContentGrid") as Grid;
      captionButtons = GetTemplateChild("CaptionButtons") as Grid;

      // Bind event handlers
      closeButton.MouseUp += CloseButtonClickHandler;
      maximizeButton.MouseUp += MaximizeButtonClickHandler;
      minimizeButton.MouseUp += MinimizeButtonClickHandler;

      // Bind window event handlers
      StateChanged += StateChangedHandler;
      StateChangedHandler(null, null);
      SizeChanged += SizeChangedHandler;
      SizeChangedHandler(null, null);
    }

    public void CloseButtonClickHandler(object sender, MouseButtonEventArgs e) {
      Close();
    }

    public void MaximizeButtonClickHandler(object sender, MouseButtonEventArgs e) {
      WindowState = (WindowState == WindowState.Maximized) ? WindowState.Normal : WindowState.Maximized;
    }

    public void MinimizeButtonClickHandler(object sender, MouseButtonEventArgs e) {
      WindowState = WindowState.Minimized;
    }

    public void SizeChangedHandler(object sender, EventArgs e) {
    }

    public void StateChangedHandler(object sender, EventArgs e) {
      if (captionButtons == null) return;
      if (WindowState == WindowState.Maximized) {
        var captionMargin = captionButtons.Margin;
        var dockMargin = contentGrid.Margin;
        captionMargin.Top = 5;
        captionMargin.Right = 2;
        captionMargin.Left = 1;
        captionButtons.Margin = captionMargin;
        dockMargin.Top = 35;
        dockMargin.Left = 6;
        dockMargin.Right = 6;
        dockMargin.Bottom = 6;
        contentGrid.Margin = dockMargin;
      } else {
        var captionMargin = captionButtons.Margin;
        var dockMargin = new Thickness();
        captionMargin.Top = 0;
        captionMargin.Right = 0;
        captionMargin.Left = 0;
        captionButtons.Margin = captionMargin;
        dockMargin.Top = 30;
        dockMargin.Left = 3;
        dockMargin.Right = 3;
        dockMargin.Bottom = 3;
        contentGrid.Margin = dockMargin;
      }
    }
  }
}