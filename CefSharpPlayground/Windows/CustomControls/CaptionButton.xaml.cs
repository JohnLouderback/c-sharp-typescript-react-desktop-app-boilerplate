using System.Windows;
using System.Windows.Controls;
using System.Windows.Media;

namespace CefSharpPlayground.Windows.CustomControls {
  /// <summary>
  /// Interaction logic for ImageButton.xaml
  /// </summary>
  public partial class CaptionButton : UserControl {
    public static readonly DependencyProperty BaseImageProperty = DependencyProperty.Register("BaseImage",
      typeof(ImageSource), typeof(CaptionButton));

    public ImageSource BaseImage {
      get { return (ImageSource)this.GetValue(BaseImageProperty); }
      set { this.SetValue(BaseImageProperty, value); }
    }

    public static readonly DependencyProperty HoverImageProperty = DependencyProperty.Register("HoverImage",
      typeof(ImageSource), typeof(CaptionButton));

    public ImageSource HoverImage {
      get { return (ImageSource)this.GetValue(HoverImageProperty); }
      set { this.SetValue(HoverImageProperty, value); }
    }

    public CaptionButton() {
      InitializeComponent();
    }
  }
}