using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(CustomerData.Startup))]
namespace CustomerData
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
