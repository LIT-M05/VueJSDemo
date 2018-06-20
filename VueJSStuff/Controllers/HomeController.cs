using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;
using VuewJSStuff.Data;

namespace VueJSStuff.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult People()
        {
            return View();
        }

        public ActionResult GetAll()
        {
            var repo = new PeopleRepository(Properties.Settings.Default.ConStr);
            return Json(repo.GetAll(), JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public void AddPerson(Person person)
        {
            var repo = new PeopleRepository(Properties.Settings.Default.ConStr);
            repo.Add(person);
        }

        [HttpPost]
        public void Update(Person person)
        {
            var repo = new PeopleRepository(Properties.Settings.Default.ConStr);
            repo.Update(person);
        }

        [HttpPost]
        public void Delete(int id)
        {
            var repo = new PeopleRepository(Properties.Settings.Default.ConStr);
            repo.Delete(id);
        }
    }
}