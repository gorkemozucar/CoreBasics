using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CoreDepartman.Models
{
    public class Context:DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("server=MSI\\SQLEXPRESS; database=corepersonel;integrated security=true;");
        }
        public DbSet<departmanlar> departmanlars { get; set; }
        public DbSet<personel> personels { get; set; }
       
    }
}
