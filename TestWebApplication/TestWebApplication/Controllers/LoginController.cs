using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using TestWebApplication.ViewModel;


namespace TestWebApplication.Controllers
{
    public class LoginController : Controller
    {
        public ActionResult DoLogin()
        {
            var viewModel = new LoginViewModel()
            {
                Username = "",
                Password = "",
                Emailaddress = ""
            };
            return View(viewModel);
        }


    
        [HttpPost]
        public JsonResult DoLoginFor(LoginViewModel viewModel)
        {
            return Json(new { });
        }
    }
}
