using CoreDepartman.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreDepartman.Controllers
{
    public class personelController : Controller
    {
        public IActionResult Index()
        {
            Context c = new Context();
            var degerler = c.personels.ToList();
            return View(degerler);
        }
    }
}
