using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CartProjectDL;

namespace CartProjectBL
{
    public class EmployeeBL
    {
        public DataTable GetStudentBelow5()
        {
            StudentDAL studentDAL = new StudentDAL();


            return studentDAL.FetchSelectedStudents().Tables[0];



        }
    }
}
