﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using CartProjectDL.Helper;

namespace CartProjectDL
{
    public class StudentDAL
    {
        public DataSet FetchSelectedStudents()
        {
            string sqlCommand = "select * from tblEmployee";
            DataSet dataSet = SqlHelper.ExecuteDataset(SqlHelper.CONN_STRING, CommandType.Text, sqlCommand);
            return dataSet;
        }


    }
}
