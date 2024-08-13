// // import React, { useState } from 'react';
// // import {
// //   Table,
// //   TableBody,
// //   TableHead,
// //   TableHeader,
// //   TableRow,
// //   TableCell,
// // } from "@/components/ui/table";
// // import { Check, X, Plus } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import {
// //   Card,
// //   CardContent,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import {
// //   Sheet,
// //   SheetContent,
// //   SheetHeader,
// //   SheetTitle,
// //   SheetDescription,
// //   SheetFooter,
// // } from "@/components/ui/sheet";
// // import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // const Claims = () => {
// //   const [open, setOpen] = useState(false);
// //   const [selectedClaim, setSelectedClaim] = useState(null);
// //   const [claims, setClaims] = useState([
// //     {
// //       policyNo: "POL001",
// //       policyName: "VitalFuture Protection Plan",
// //       planMonths: 12,
// //       planYears: 1,
// //       policyHolderName: "John Doe",
// //       nominee: "Jane Doe",
// //       reasonForClaim: "Accidental Death",
// //       status: "", 
// //     },
// //     {
// //       policyNo: "POL002",
// //       policyName: "EcoGuard Family Coverage",
// //       planMonths: 24,
// //       planYears: 2,
// //       policyHolderName: "Alice Smith",
// //       nominee: "Bob Smith",
// //       reasonForClaim: "Hospitalization",
// //       status: "", // "Will Contact Soon" or "Denied"
// //     },
// //     {
// //       policyNo: "POL003",
// //       policyName: "LifLINE aSSURANCE Policy",
// //       planMonths: 6,
// //       planYears: 0,
// //       policyHolderName: "Charlie Brown",
// //       nominee: "Lucy Brown",
// //       reasonForClaim: "Vehicle Theft",
// //       status: "", // "Will Contact Soon" or "Denied"
// //     },
// //     // Add more claims as needed
// //   ]);

// //   const handleAccept = (claim) => {
// //     setSelectedClaim(claim);
// //     setOpen(true);
// //   };

// //   const handleDeny = (claimNo) => {
// //     if (`window.confirm(Are you sure you want to deny claim ${claimNo}?)`) {
// //       setClaims(claims.map(claim =>
// //         claim.policyNo === claimNo ? { ...claim, status: "Denied" } : claim
// //       ));
// //       toast.error(`Claim ${claimNo} denied`);
// //     }
// //   };

// //   const handleConfirm = () => {
// //     setClaims(claims.map(claim =>
// //       claim.policyNo === selectedClaim.policyNo ? { ...claim, status: "Claim Accepted" } : claim
// //     ));
// //     toast.success(`Claim ${selectedClaim.policyNo} is Accepted`);
// //     setOpen(false);
// //   };

// //   return (
// //     <>
// //       <Card>
// //         <CardHeader className='w-full flex flex-row justify-between items-center'>
// //           <CardTitle>Claims</CardTitle>
// //           {/* <Button onClick={() => setOpen(true)}>
// //             <Plus className='h-5 w-5 mr-2' /> Add Claim
// //           </Button> */}
// //         </CardHeader>
// //         <CardContent>
// //           <Table>
// //             <TableHeader>
// //               <TableRow>
// //                 <TableHead className="w-[100px]">Policy No</TableHead>
// //                 <TableHead>Policy Name</TableHead>
// //                 <TableHead>Duration (Months/Years)</TableHead>
// //                 <TableHead>Policy Holder Name</TableHead>
// //                 <TableHead>Nominee</TableHead>
// //                 <TableHead>Reason for Claim</TableHead>
// //                 <TableHead className="text-right w-[140px]">Actions</TableHead>
// //               </TableRow>
// //             </TableHeader>
// //             <TableBody>
// //               {claims.map((claim) => (
// //                 <TableRow key={claim.policyNo}>
// //                   <TableCell className="font-medium">{claim.policyNo}</TableCell>
// //                   <TableCell>{claim.policyName}</TableCell>
// //                   <TableCell>{claim.planMonths} Months / {claim.planYears} Years</TableCell>
// //                   <TableCell>{claim.policyHolderName}</TableCell>
// //                   <TableCell>{claim.nominee}</TableCell>
// //                   <TableCell>{claim.reasonForClaim}</TableCell>
// //                   <TableCell className="text-right">
// //                     {claim.status === "Claim Accepted" && (
// //                       <span className="text-green-500">Claim Accepted</span>
// //                     )}
// //                     {claim.status === "Denied" && (
// //                       <span className="text-red-500">Denied</span>
// //                     )}
// //                     {claim.status === "" && (
// //                       <>
// //                         <Button variant="ghost" size="icon" className="mr-2" onClick={() => handleAccept(claim)}>
// //                           <Check className="h-4 w-4 text-green-500" />
// //                         </Button>
// //                         <Button variant="ghost" size="icon" className="text-red-600" onClick={() => handleDeny(claim.policyNo)}>
// //                           <X className="h-4 w-4" />
// //                         </Button>
// //                       </>
// //                     )}
// //                   </TableCell>
// //                 </TableRow>
// //               ))}
// //             </TableBody>
// //           </Table>
// //         </CardContent>
// //       </Card>

// //       <Sheet open={open} onOpenChange={() => setOpen(false)}>
// //         <SheetContent>
// //           <SheetHeader>
// //             <SheetTitle>Claim Details</SheetTitle>
// //             <SheetDescription>
// //               Review the details of the selected claim and make your decision.
// //             </SheetDescription>
// //           </SheetHeader>
// //           <div className="grid gap-4 py-4">
// //             <div className="grid grid-cols-4 items-center gap-4">
// //               <Label htmlFor="policyNo" className="text-right">
// //                 Policy No
// //               </Label>
// //               <Input id="policyNo" value={selectedClaim?.policyNo || ''} disabled className="col-span-3" />
// //             </div>
// //             <div className="grid grid-cols-4 items-center gap-4">
// //               <Label htmlFor="policyName" className="text-right">
// //                 Policy Name
// //               </Label>
// //               <Input id="policyName" value={selectedClaim?.policyName || ''} disabled className="col-span-3" />
// //             </div>
// //             <div className="grid grid-cols-4 items-center gap-4">
// //               <Label htmlFor="planMonths" className="text-right">
// //                 Duration
// //               </Label>
// //               <Input id="planMonths" value={`${selectedClaim?.planMonths || ''} Months / ${selectedClaim?.planYears || ''} Years`} disabled className="col-span-3" />
// //             </div>
// //             <div className="grid grid-cols-4 items-center gap-4">
// //               <Label htmlFor="policyHolderName" className="text-right">
// //                 Policy Holder Name
// //               </Label>
// //               <Input id="policyHolderName" value={selectedClaim?.policyHolderName || ''} disabled className="col-span-3" />
// //             </div>
// //             <div className="grid grid-cols-4 items-center gap-4">
// //               <Label htmlFor="nominee" className="text-right">
// //                 Nominee
// //               </Label>
// //               <Input id="nominee" value={selectedClaim?.nominee || ''} disabled className="col-span-3" />
// //             </div>
// //             <div className="grid grid-cols-4 items-center gap-4">
// //               <Label htmlFor="reasonForClaim" className="text-right">
// //                 Reason for Claim
// //               </Label>
// //               <Input id="reasonForClaim" value={selectedClaim?.reasonForClaim || ''} disabled className="col-span-3" />
// //             </div>
// //           </div>
// //           <SheetFooter className='flex flex-col flex-1'>
// //             <Button className='w-1/2 bg-destructive hover:bg-destructive/80' onClick={() => setOpen(false)}>Cancel</Button>
// //             <Button type="button" className='w-1/2' onClick={handleConfirm}>Confirm</Button>
// //           </SheetFooter>
// //         </SheetContent>
// //       </Sheet>

// //       {/* Toast Container */}
// //       <ToastContainer />
// //     </>
// //   );
// // };

// // export default Claims;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import {
// //   Table,
// //   TableBody,
// //   TableHead,
// //   TableHeader,
// //   TableRow,
// //   TableCell,
// // } from "@/components/ui/table";
// // import { Button } from "@/components/ui/button";
// // import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // const Claims = () => {
// //   const [claims, setClaims] = useState([]);

// //   useEffect(() => {
// //     const fetchClaims = async () => {
// //       try {
// //         const response = await axios.get('/claims');
// //         setClaims(response.data);
// //       } catch (error) {
// //         toast.error("Failed to fetch claims.");
// //       }
// //     };

// //     fetchClaims();
// //   }, []);

// //   const handleAction = async (claimId, actionType) => {
// //     try {
// //       await axios.patch(`/claims/${claimId}`, { action: actionType });
// //       setClaims(prevClaims =>
// //         prevClaims.map(claim =>
// //           claim.id === claimId ? { ...claim, action: actionType } : claim
// //         )
// //       );
// //       toast.success(`Claim ${actionType === true ? 'accepted' : 'rejected'}.`);
// //     } catch (error) {
// //       toast.error("Failed to update claim.");
// //     }
// //   };

// //   return (
// //     <>
// //       <Table>
// //         <TableHeader>
// //           <TableRow>
// //             <TableHead>Policy No</TableHead>
// //             <TableHead>Policy Name</TableHead>
// //             <TableHead>Claim Reason</TableHead>
// //             <TableHead>Additional Details</TableHead>
// //             <TableHead>Date of Incident</TableHead>
// //             <TableHead>Action</TableHead>
// //           </TableRow>
// //         </TableHeader>
// //         <TableBody>
// //           {claims.map(claim => (
// //             <TableRow key={claim.id}>
// //               <TableCell>{claim.policyNo}</TableCell>
// //               <TableCell>{claim.policyName}</TableCell>
// //               <TableCell>{claim.claimReason}</TableCell>
// //               <TableCell>{claim.additionalDetails}</TableCell>
// //               <TableCell>{claim.dateOfIncident}</TableCell>
// //               <TableCell>
// //                 {!claim.action ? (
// //                   <>
// //                     <Button variant="ghost" size="sm" onClick={() => handleAction(claim.id, true)}>✓</Button>
// //                     <Button variant="ghost" size="sm" onClick={() => handleAction(claim.id, false)}>✗</Button>
// //                   </>
// //                 ) : claim.action === true ? 'Claim Accepted' : 'Claim Rejected'}
// //               </TableCell>
// //             </TableRow>
// //           ))}
// //         </TableBody>
// //       </Table>
// //       <ToastContainer />
// //     </>
// //   );
// // };

// // export default Claims;


// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import {
// //   Table,
// //   TableBody,
// //   TableHead,
// //   TableHeader,
// //   TableRow,
// //   TableCell,
// // } from "@/components/ui/table";
// // import { Button } from "@/components/ui/button";
// // import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // const Claims = () => {
// //   const [claims, setClaims] = useState([]);

// //   useEffect(() => {
// //     const fetchClaims = async () => {
// //       try {
// //         const response = await axios.get('http://localhost:8080/claims');
// //         setClaims(response.data);
// //       } catch (error) {
// //         toast.error("Failed to fetch claims.");
// //       }
// //     };

// //     fetchClaims();
// //   }, []);

// //   const handleAction = async (claimNo, actionType) => {
// //     try {
// //       await axios.patch(`http://localhost:8080/claims/${claimNo}/action`, { action: actionType });
// //       setClaims(prevClaims =>
// //         prevClaims.map(claim =>
// //           claim.claimNo === claimNo ? { ...claim, action: actionType } : claim
// //         )
// //       );
// //       toast.success(`Claim ${actionType === true ? 'accepted' : 'rejected'}.`);
// //     } catch (error) {
// //       toast.error("Failed to update claim.");
// //     }
// //   };

// //   return (
// //     <>
// //       <Table>
// //         <TableHeader>
// //           <TableRow>
// //             <TableHead>Policy No</TableHead>
// //             <TableHead>Policy Name</TableHead>
// //             <TableHead>Claim Reason</TableHead>
// //             <TableHead>Additional Details</TableHead>
// //             <TableHead>Date of Incident</TableHead>
// //             <TableHead>Action</TableHead>
// //           </TableRow>
// //         </TableHeader>
// //         <TableBody>
// //           {claims.map(claim => (
// //             <TableRow key={claim.claimNo}>
// //               <TableCell>{claim.customerPolicy.policyNo}</TableCell>
// //               <TableCell>{claim.customerPolicy.policyName}</TableCell>
// //               <TableCell>{claim.claimReason}</TableCell>
// //               <TableCell>{claim.incidentDescription}</TableCell>
// //               <TableCell>{claim.dateOfIncident}</TableCell>
// //               <TableCell>
// //                 {!claim.action ? (
// //                   <>
// //                     <Button variant="ghost" size="sm" onClick={() => handleAction(claim.claimNo, true)}>✓</Button>
// //                     <Button variant="ghost" size="sm" onClick={() => handleAction(claim.claimNo, false)}>✗</Button>
// //                   </>
// //                 ) : claim.action === true ? 'Claim Accepted' : 'Claim Rejected'}
// //               </TableCell>
// //             </TableRow>
// //           ))}
// //         </TableBody>
// //       </Table>
// //       <ToastContainer />
// //     </>
// //   );
// // };

// // export default Claims;

// // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { axiosInstance } from '@/services/api';
// // import {
// //   Table,
// //   TableBody,
// //   TableHead,
// //   TableHeader,
// //   TableRow,
// //   TableCell,
// // } from "@/components/ui/table";
// // import { Button } from "@/components/ui/button";
// // import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // const Claims = () => {
// //   const [claims, setClaims] = useState([]);

// //   useEffect(() => {
// //     const fetchClaims = async () => {
// //       try {
// //         const token = localStorage.getItem('token'); 
// //         const response = await axiosInstance.get('http://localhost:8080/claims', {
// //         // const response = await axios.get('http://localhost:8080/claims', {
// //           headers: {
// //             Authorization: `Bearer ${token}`
// //           }
// //         });
// //         setClaims(response.data);
// //       } catch (error) {
// //         if (error.response && error.response.status === 403) {
// //           toast.error("Access denied: You do not have permission to view this resource.");
// //         } else {
// //           toast.error("Failed to fetch claims.");
// //         }
// //       }
// //     };
    

// //     fetchClaims();
// //   }, []);

// //   const handleAction = async (claimNo, actionType) => {
// //     try {
// //       await axiosInstance.patch(`http://localhost:8080/claims/${claimNo}/action`, { action: actionType });
// //       // await axios.patch(`http://localhost:8080/claims/${claimNo}/action`, { action: actionType });
// //       setClaims(prevClaims =>
// //         prevClaims.map(claim =>
// //           claim.claimNo === claimNo ? { ...claim, action: actionType } : claim
// //         )
// //       );
// //       toast.success(`Claim ${actionType === true ? 'accepted' : 'rejected'}.`);
// //     } catch (error) {
// //       toast.error("Failed to update claim.");
// //     }
// //   };

// //   return (
// //     <>
// //       <Table>
// //         <TableHeader>
// //           <TableRow>
// //             <TableHead>Claim No</TableHead>
// //             <TableHead>Policy No</TableHead>
// //             <TableHead>Policy Name</TableHead>
// //             <TableHead>Claim Reason</TableHead>
// //             <TableHead>Additional Details</TableHead>
// //             <TableHead>Date of Incident</TableHead>
// //             <TableHead>Date of Claim</TableHead>
// //             <TableHead>Status</TableHead>
// //             <TableHead>Action</TableHead>
// //           </TableRow>
// //         </TableHeader>
// //         <TableBody>
// //           {claims.map(claim => (
// //             <TableRow key={claim.claimNo}>
// //               <TableCell>{claim.claimNo}</TableCell>
// //               <TableCell>{claim.customerPolicy.policyNo}</TableCell>
// //               <TableCell>{claim.customerPolicy.policyName}</TableCell>
// //               <TableCell>{claim.claimReason}</TableCell>
// //               <TableCell>{claim.incidentDescription}</TableCell>
// //               <TableCell>{claim.dateOfIncident}</TableCell>
// //               <TableCell>{claim.dateOfClaim}</TableCell>
// //               <TableCell>{claim.status ? 'Approved' : 'Pending'}</TableCell>
// //               <TableCell>
// //                 {!claim.action ? (
// //                   <>
// //                     <Button variant="ghost" size="sm" onClick={() => handleAction(claim.claimNo, true)}>✓</Button>
// //                     <Button variant="ghost" size="sm" onClick={() => handleAction(claim.claimNo, false)}>✗</Button>
// //                   </>
// //                 ) : claim.action === true ? 'Claim Accepted' : 'Claim Rejected'}
// //               </TableCell>
// //             </TableRow>
// //           ))}
// //         </TableBody>
// //       </Table>
// //       <ToastContainer />
// //     </>
// //   );
// // };

// // export default Claims;


// // import React, { useState, useEffect } from 'react';
// // import { axiosInstance } from '@/services/api';
// // import {
// //   Table,
// //   TableBody,
// //   TableHead,
// //   TableHeader,
// //   TableRow,
// //   TableCell,
// // } from "@/components/ui/table";
// // import { Button } from "@/components/ui/button";
// // import { toast, ToastContainer } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // const Claims = () => {
// //   const [claims, setClaims] = useState([]);

// //   useEffect(() => {
// //     const fetchClaims = async () => {
// //       try {
// //         const token = localStorage.getItem('token');
// //         const response = await axiosInstance.get('/claims', {
// //           headers: {
// //             Authorization: `Bearer ${token}`
// //           }
// //         });
// //         // Ensure claims data is valid
// //         const validClaims = response.data.filter(claim => claim.customerPolicy);
// //         setClaims(validClaims);
// //       } catch (error) {
// //         if (error.response && error.response.status === 403) {
// //           toast.error("Access denied: You do not have permission to view this resource.");
// //         } else {
// //           toast.error("Failed to fetch claims.");
// //         }
// //       }
// //     };

// //     fetchClaims();
// //   }, []);

// //   const handleAction = async (claimNo, actionType) => {
// //     try {
// //       await axiosInstance.patch(`/claims/${claimNo}/action`, { action: actionType });
// //       setClaims(prevClaims =>
// //         prevClaims.map(claim =>
// //           claim.claimNo === claimNo ? { ...claim, action: actionType } : claim
// //         )
// //       );
// //       toast.success(`Claim ${actionType === true ? 'accepted' : 'rejected'}.`);
// //     } catch (error) {
// //       toast.error("Failed to update claim.");
// //     }
// //   };

// //   return (
// //     <>
// //       <Table>
// //         <TableHeader>
// //           <TableRow>
// //             <TableHead>Claim No</TableHead>
// //             <TableHead>Policy No</TableHead>
// //             <TableHead>Policy Name</TableHead>
// //             <TableHead>Claim Reason</TableHead>
// //             <TableHead>Additional Details</TableHead>
// //             <TableHead>Date of Incident</TableHead>
// //             <TableHead>Date of Claim</TableHead>
// //             <TableHead>Status</TableHead>
// //             <TableHead>Action</TableHead>
// //           </TableRow>
// //         </TableHeader>
// //         <TableBody>
// //           {claims.map(claim => (
// //             <TableRow key={claim.claimNo}>
// //               <TableCell>{claim.claimNo}</TableCell>
// //               <TableCell>{claim.customerPolicy?.policyNo || "N/A"}</TableCell>
// //               <TableCell>{claim.customerPolicy?.policyName || "N/A"}</TableCell>
// //               <TableCell>{claim.claimReason}</TableCell>
// //               <TableCell>{claim.incidentDescription}</TableCell>
// //               <TableCell>{claim.dateOfIncident}</TableCell>
// //               <TableCell>{claim.dateOfClaim}</TableCell>
// //               <TableCell>{claim.status ? 'Approved' : 'Pending'}</TableCell>
// //               <TableCell>
// //                 {!claim.action ? (
// //                   <>
// //                     <Button variant="ghost" size="sm" onClick={() => handleAction(claim.claimNo, true)}>✓</Button>
// //                     <Button variant="ghost" size="sm" onClick={() => handleAction(claim.claimNo, false)}>✗</Button>
// //                   </>
// //                 ) : claim.action === true ? 'Claim Accepted' : 'Claim Rejected'}
// //               </TableCell>
// //             </TableRow>
// //           ))}
// //         </TableBody>
// //       </Table>
// //       <ToastContainer />
// //     </>
// //   );
// // };

// // export default Claims;

// import React, { useState, useEffect } from 'react';
// import { axiosInstance } from '@/services/api';
// import {
//   Table,
//   TableBody,
//   TableHead,
//   TableHeader,
//   TableRow,
//   TableCell,
// } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Claims = () => {
//   const [claims, setClaims] = useState([]);

//   useEffect(() => {
//     const fetchClaims = async () => {
//       try {
//         const response = await axiosInstance.get('/claims'); // No need for headers, axiosInstance handles the token
//         setClaims(response.data);
//       } catch (error) {
//         if (error.response && error.response.status === 403) {
//           toast.error("Access denied: You do not have permission to view this resource.");
//         } else {
//           toast.error("Failed to fetch claims.");
//         }
//       }
//     };

//     fetchClaims();
//   }, []);

//   const handleAction = async (claimNo, actionType) => {
//     try {
//       await axiosInstance.patch(`/claims/${claimNo}/action`, { action: actionType });
//       setClaims(prevClaims =>
//         prevClaims.map(claim =>
//           claim.claimNo === claimNo ? { ...claim, action: actionType } : claim
//         )
//       );
//       toast.success(`Claim ${actionType === true ? 'accepted' : 'rejected'}.`);
//     } catch (error) {
//       toast.error("Failed to update claim.");
//     }
//   };

//   return (
//     <>
//       <Table>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Claim No</TableHead>
//             <TableHead>Policy No</TableHead>
//             <TableHead>Policy Name</TableHead>
//             <TableHead>Claim Reason</TableHead>
//             <TableHead>Additional Details</TableHead>
//             <TableHead>Date of Incident</TableHead>
//             {/* <TableHead>Date of Claim</TableHead>
//             <TableHead>Status</TableHead> */}
//             <TableHead>Action</TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {claims.map(claim => (
//             <TableRow key={claim.claimNo}>
//               <TableCell>{claim.claimNo}</TableCell>
//               <TableCell>{claim.customerPolicy?.policyNo || 'N/A'}</TableCell>
//               <TableCell>{claim.customerPolicy?.policyName || 'N/A'}</TableCell>
//               <TableCell>{claim.claimReason}</TableCell>
//               <TableCell>{claim.incidentDescription}</TableCell>
//               <TableCell>{claim.dateOfIncident}</TableCell>
//               {/* <TableCell>{claim.dateOfClaim}</TableCell> */}
//               {/* <TableCell>{claim.status ? 'Approved' : 'Pending'}</TableCell> */}
//               <TableCell>
//                 {!claim.action ? (
//                   <>
//                     <Button variant="ghost" size="sm" onClick={() => handleAction(claim.claimNo, true)}>✓</Button>
//                     <Button variant="ghost" size="sm" onClick={() => handleAction(claim.claimNo, false)}>✗</Button>
//                   </>
//                 ) : claim.action === true ? 'Claim Accepted' : 'Claim Rejected'}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <ToastContainer />
//     </>
//   );
// };

// export default Claims;

import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchClaims } from '@/services/api';
import { axiosInstance } from '../../services/api';
const Claims = () => {
  const [open, setOpen] = useState(false);
  const [selectedClaim, setSelectedClaim] = useState(null);
  const [claims, setClaims] = useState([]);

  useEffect(() => {
    const getClaims = async () => {
      try {
        const response = await fetchClaims();
        setClaims(response.data);
      } catch (error) {
        toast.error("Failed to fetch claims");
      }
    };

    getClaims();
  }, []);

  const handleAccept = (claim) => {
    setSelectedClaim(claim);
    setOpen(true);
  };

  const handleDeny = (claimNo) => {
    if (window.confirm(`Are you sure you want to deny policy ${claimNo}?`)) {
      axiosInstance.delete(`/claims/${claimNo}`)
        .then(() => {
          setClaims(claims.filter(claim => claim.claimNo !== claimNo));
          toast.error(`Claim ${claimNo} denied and deleted`);
          setOpen(false);
        })
        .catch(error => {
          console.error('There was an error denying the Claim!', error);
          toast.error('Failed to deny claim');
        });
    }
  };

  const handleConfirm = (claimNo) => {
    
     axiosInstance.put(`/claims/${selectedClaim.claimNo}/action`, { action: true })
     .then(()=>{

       setClaims(claims.map(claim =>
         claim.claimNo === claimNo ? {...claim,status:"Accepted"}:claim
       ));
       toast.success(`Claim ${selectedClaim.claimNo} is Accepted`);
       setOpen(false);
     })
    . catch (error=> {
      console.error("There was a error accepting the claim",error);
      toast.error("Failed to update claim");
    });
    
  };

  return (
    <>
      <Card>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle>Claims</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Claim No</TableHead>
                <TableHead>Policy Name</TableHead>
                <TableHead>Policy Holder Name</TableHead>
                <TableHead>Nominee</TableHead>
                <TableHead>Reason for Claim</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {claims.map((claim) => (
                <TableRow key={claim.claimNo}>
                  <TableCell className="font-medium">{claim.claimNo}</TableCell>
                  <TableCell>{claim.customerPolicy.policyName}</TableCell>
                  <TableCell>{claim.customerPolicy.policyHolderName}</TableCell>
                  <TableCell>{claim.customerPolicy.nomineeName}</TableCell>
                  <TableCell>{claim.claimReason}</TableCell>
                  <TableCell className="text-right">
  {claim.status === "Accepted" && (
    <span className="text-green-500">Accepted</span>
  )}
  {claim.status === "Denied" && (
    <span className="text-red-500">Denied</span>
  )}
  {(!claim.status || claim.status === "") && (
    <>
      <Button variant="ghost" size="icon" className="mr-2" onClick={() => handleAccept(claim)}>
        <Check className="h-4 w-4 text-green-500" />
      </Button>
      <Button variant="ghost" size="icon" className="text-red-600" onClick={() => handleDeny(claim.claimNo)}>
        <X className="h-4 w-4" />
      </Button>
    </>
  )}
</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Sheet open={open} onOpenChange={() => setOpen(false)}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Claim Details</SheetTitle>
            <SheetDescription>
              Review the details of the selected claim and make your decision.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="claimNo" className="text-right">
                Claim No
              </Label>
              <Input id="claimNo" value={selectedClaim?.claimNo || ''} disabled className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="policyName" className="text-right">
                Policy Name
              </Label>
              <Input id="policyName" value={selectedClaim?.customerPolicy.policyName || ''} disabled className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="policyHolderName" className="text-right">
                Policy Holder Name
              </Label>
              <Input id="policyHolderName" value={selectedClaim?.customerPolicy.policyHolderName || ''} disabled className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="nominee" className="text-right">
                Nominee
              </Label>
              <Input id="nominee" value={selectedClaim?.customerPolicy.nomineeName || ''} disabled className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="claimReason" className="text-right">
                Reason for Claim
              </Label>
              <Input id="claimReason" value={selectedClaim?.claimReason || ''} disabled className="col-span-3" />
            </div>
          </div>
          <SheetFooter className='flex flex-col flex-1'>
            <Button className='w-1/2 bg-destructive hover:bg-destructive/80' onClick={() => setOpen(false)}>Cancel</Button>
            <Button type="button" className='w-1/2' onClick={()=>handleConfirm(selectedClaim?.claimNo)}>Confirm</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default Claims;