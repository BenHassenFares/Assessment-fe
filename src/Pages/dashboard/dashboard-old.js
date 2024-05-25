// import { Grid } from "@mui/material";
// import "./style.scss";
// import LocalMallIcon from "@mui/icons-material/LocalMall";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
// import graph from "../../Images/graph.png";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import grph from "../../Images/graph1.png";
// import Layout from "../../Components/layout/layout";
// const Dashboard = () => {
//   return (
//     <Layout>
//     <div className="dashboard-content">
//       <Grid
//         container
//         direction="row"
//         justifyContent="center"
//         alignItems="center"
//         rowSpacing={2}
//       >
//         <div className="cards-row">
//           <div className="cards-row-card">
//             <div className="cards-row-card-top">
//               <div className="cards-row-card-top-icon">
//                 <LocalMallIcon />
//               </div>
//               <div className="cards-row-card-top-title">
//                 Assessments Assigned {">"}
//               </div>
//             </div>
//             <div className="cards-row-card-middle">200</div>

//             <div className="cards-row-card-rest">
//               <div className="cards-row-card-rest-icon">
//                 <TrendingUpIcon />{" "}
//               </div>
//               <div className="cards-row-card-rest-pcntge">+15.6%</div>
//               <div className="cards-row-card-rest-t">+18 this week</div>
//             </div>
//           </div>

//           <div
//             className="cards-row-card"
//             style={{
//               backgroundColor: "white",
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <div className="cards-row-card-top">
//               <div className="cards-row-card-top-icon">
//                 <PermContactCalendarIcon />
//               </div>
//               <div
//                 className="cards-row-card-top-title"
//                 style={{ color: "#202123" }}
//               >
//                 Candidates{" "}
//               </div>
//               <div
//                 className="cards-row-card-top-title-prt2"
//                 style={{ color: "#202123" }}
//               >
//                 {">"}{" "}
//               </div>{" "}
//             </div>
//             <div
//               className="cards-row-card-middle"
//               style={{ color: "#202123", flex: "1" }}
//             >
//               122
//             </div>
//             <div className="cards-row-card-rest">
//               <div className="cards-row-card-rest-icon">
//                 <TrendingUpIcon style={{ color: "#202123" }} />
//               </div>
//               <div
//                 className="cards-row-card-rest-pcntge"
//                 style={{ color: "#202123" }}
//               >
//                 +15.6%
//               </div>
//               <div
//                 className="cards-row-card-rest-t "
//                 style={{ color: "#202123" }}
//               >
//                 +12 this week
//               </div>
//             </div>
//           </div>
//         </div>
//       </Grid>

//       <Grid
//         container
//         direction="row"
//         justifyContent="center"
//         alignItems="center"
//         gap={30}
//       >
//         <div
//           className="cards-row"
//           style={{
//             paddingTop: "30px",
//             display: "flex",
//             flexDirection: "row",
//           }}
//         >
//           <div
//             className="cards-row-card"
//             style={{
//               width: "706px",
//               height: "375px",
//               background: "#ffffff",
//               borderRadius: "34px",
//             }}
//           >
//             <div className="cards-row-card-top">
//               <div
//                 className="cards-row-card-top-title"
//                 style={{ color: "#202123", fontWeight: "600" }}
//               >
//                 Assessments
//               </div>
//               <div
//                 className="cards-row-card-top-title-two"
//                 style={{
//                   flex: "1",
//                   fontWeight: "600",
//                   width: "154px",
//                   height: "36px",
//                   color: "#606060",
//                   borderColor: "#ebebeb",
//                   borderWidth: "2px",
//                   borderStyle: "solid",
//                   borderRadius: "23px",
//                   display: "flex",
//                   flexDirection: "row",
//                   alignSelf: "center",
//                   paddingLeft: "20px",
//                 }}
//               >
//                 <div
//                   className="cards-row-card-top-title-two"
//                   style={{ flex: 1 }}
//                 >
//                   {" "}
//                   Last 14 days
//                 </div>
//                 <KeyboardArrowDownIcon
//                   style={{ color: "#606060", alignSelf: "center" }}
//                 />
//               </div>
//             </div>
//             <img src={graph} alt="" className="cards-row-card-top-img" />
//           </div>
//           <div
//             className="cards-row-card"
//             style={{
//               backgroundColor: "white",
//               display: "flex",
//               flexDirection: "column",
//               width: "270px",
//               height: "374px",
//               borderRadius: "34px",
//               padding: "20px",
//             }}
//           >
//             <div className="cards-row-card-top" style={{ padding: "10px" }}>
//               <div
//                 className="cards-row-card-top-title"
//                 style={{ color: "#202123" }}
//               >
//                 Top Categories
//               </div>
//             </div>
//             <div
//               className="cards-row-card-middle"
//               style={{ color: "#202123", flex: "1" }}
//             >
//               <img src={grph} alt=""/>
//             </div>

//             <div className="cards-row-card-bm">
//               <div className="cards-row-card-bm-btm">
//                 <div className="cards-row-card-bm-btm-bottom-line">
//                   <div className="cards-row-card-bm-btm-bottom-line-c"></div>
//                   <div className="cards-row-card-bm-btm-bottom-line-cc">
//                     General
//                   </div>
//                 </div>

//                 <div className="cards-row-card-bm-btm-bottom-line">
//                   <div className="cards-row-card-bm-btm-bottom-line-e"></div>
//                   <div className="cards-row-card-bm-btm-bottom-line-cc">
//                     Coding
//                   </div>
//                 </div>
//                 <div className="cards-row-card-bm-btm-bottom-line">
//                   <div className="cards-row-card-bm-btm-bottom-line-p"></div>
//                   <div className="cards-row-card-bm-btm-bottom-line-cc">
//                     Personality
//                   </div>
//                 </div>
//               </div>

//               <div
//                 className="cards-row-card-bm-tt "
//                 style={{ color: "#202123" }}
//               >
//                 {">"}{" "}
//               </div>
//             </div>
//           </div>{" "}
//         </div>
//       </Grid>
//     </div>
//     </Layout>
//   );
// };
// export default Dashboard;
