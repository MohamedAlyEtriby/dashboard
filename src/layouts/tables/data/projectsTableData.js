/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import logoGithub from "assets/images/small-logos/github.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import { Hidden, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function Mytable1data() {
  const columns = [
    { id: "name", label: "البريد الاكتروني", align: "left" },
    { id: "age", label: "البلد", align: "center" },
    { id: "city", label: "قيمة التبرع", align: "center" },
    { id: "city", label: "الراعي", align: "center" },
    { id: "city", label: "البنك", align: "center" },
    { id: "city", label: "نوع الكارت", align: "center" },
    { id: "city", label: "نوع العملي", align: "center" },
    { id: "city", label: "التحقق من نجاح العملية", align: "center" },
  ];

  const rows = [
    { name: "John Doe", age: 28, city: "New York" },
    { name: "Jane Smith", age: 35, city: "San Francisco" },
    { name: "Bob Johnson", age: 42, city: "Los Angeles" },
  ];
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <Hidden key={column.id} xs={column.xs} md={column.md}>
                <TableCell align={column.align}>{column.label}</TableCell>
              </Hidden>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column) => (
                <Hidden key={column.id} xs={column.xs} md={column.md}>
                  <TableCell align={column.align}>{row[column.id]}</TableCell>
                </Hidden>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
