// // import React, { useState, useEffect } from 'react';
// // import { Plus } from 'lucide-react';

// // import {
// //   Table,
// //   TableBody,
// //   TableHead,
// //   TableHeader,
// //   TableRow,
// //   TableCell,
// // } from "@/components/ui/table";
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

// // const UserDashboard = () => {
// //   const [open, setOpen] = useState(false);
// //   const [selectedPolicy, setSelectedPolicy] = useState(null);
// //   const [action, setAction] = useState(null);
// //   const [formValues, setFormValues] = useState({});
// //   const [formErrors, setFormErrors] = useState({});
// //   const [isFormValid, setIsFormValid] = useState(false);

// //   const policies = [
// //     {
// //       policyNo: "POL001",
// //       policyName: "VitalSecure Life Plan",
// //       planMonths: 12,
// //       planYears: 1,
// //       policyHolderName: "John Doe",
// //       policyHolderAadhar: "1234 5678 9012",
// //       policyHolderPAN: "ABCDE1234F",
// //       nominee: "Amy Doe",
// //       amount: "₹750",
// //       status: "", 
// //     },
    
// //     {
// //       policyNo: "POL002",
// //       policyName: "EchoFlex Term Insurance",
// //       planMonths: 24,
// //       planYears: 2,
// //       policyHolderName: "Alice Smith",
// //       policyHolderAadhar: "9876 5432 1098",
// //       policyHolderPAN: "XYZAB5678C",
// //       nominee: "Bob Smith",
// //       amount: "₹1000",
// //       status: "", 
// //     },
// //     {
// //       policyNo: "POL003",
// //       policyName: "VitalFuture Protection Plan",
// //       planMonths: 6,
// //       planYears: 0,
// //       policyHolderName: "Charlie Brown",
// //       policyHolderAadhar: "1357 2468 9023",
// //       policyHolderPAN: "LMNOP1234D",
// //       nominee: "Lucy Brown",
// //       amount: "₹900",
// //       status: "", 
// //     },
// //   ];

// //   useEffect(() => {
// //     validateForm();
// //   }, [formValues]);

// //   const openSheetWithPolicy = (policy, actionType) => {
// //     setSelectedPolicy(policy);
// //     setAction(actionType);
// //     setOpen(true);
// //     setFormValues({});
// //     setFormErrors({});
// //   };

// //   const handleInputChange = (e) => {
// //     const { id, value } = e.target;
// //     setFormValues({ ...formValues, [id]: value });
// //   };

// //   const validateForm = () => {
// //     const errors = {};
// //     const requiredFields = action === 'Claim'
// //       ? ['claimReason', 'additionalDetails', 'dateOfIncident']
// //       : ['cardNumber', 'cname', 'expirydate', 'cvv'];

// //     requiredFields.forEach(field => {
// //       if (!formValues[field]) {
// //         errors[field] = 'This field is required';
// //       }
// //     });

// //     setFormErrors(errors);
// //     setIsFormValid(Object.keys(errors).length === 0);
// //   };

// //   const handleSubmit = () => {
// //     if (action === 'Claim') {
// //       toast.info("Your claim is being processed. You will be notified shortly.");
// //     } else {
// //       toast.success("Payment successful", {
// //         icon: "✔️",
// //       });
// //     }
// //     setOpen(false);
// //   };

// //   return (
// //     <>
// //       <Card>
// //         <CardHeader className='w-full flex flex-row justify-between items-center'>
// //           <CardTitle> My Policies</CardTitle>
// //         </CardHeader>
// //         <CardContent>
// //           <Table>
// //             <TableHeader>
// //               <TableRow>
// //                 <TableHead className="w-[100px]">Policy No</TableHead>
// //                 <TableHead>Policy Name</TableHead>
// //                 <TableHead>Duration (Months/Years)</TableHead>
// //                 <TableHead>Policy Holder Name</TableHead>
// //                 <TableHead>Policy Holder Aadhar No</TableHead>
// //                 <TableHead>Policy Holder PAN No</TableHead>
// //                 <TableHead>Nominee</TableHead>
// //                 <TableHead>Amount (per month)</TableHead>
// //                 <TableHead className="text-center w-[200px]">Actions</TableHead>
// //               </TableRow>
// //             </TableHeader>
// //             <TableBody>
// //               {policies.map((policy) => (
// //                 <TableRow key={policy.policyNo}>
// //                   <TableCell className="font-medium">{policy.policyNo}</TableCell>
// //                   <TableCell>{policy.policyName}</TableCell>
// //                   <TableCell>{policy.planMonths} Months / {policy.planYears} Years</TableCell>
// //                   <TableCell>{policy.policyHolderName}</TableCell>
// //                   <TableCell>{policy.policyHolderAadhar}</TableCell>
// //                   <TableCell>{policy.policyHolderPAN}</TableCell>
// //                   <TableCell>{policy.nominee}</TableCell>
// //                   <TableCell className="text-right">{policy.amount}</TableCell>
// //                   <TableCell className="text-right">
// //                     <Button variant="ghost" size="sm" className="mr-2 bg-customGreen rounded-3xl" onClick={() => openSheetWithPolicy(policy, 'Claim')}>
// //                       Claim
// //                     </Button>
// //                     <Button variant="ghost" size="sm" className="bg-customGreen rounded-3xl" onClick={() => openSheetWithPolicy(policy, 'Pay')}>
// //                       Pay 
// //                     </Button>
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
// //             <SheetTitle>{action === 'Claim' ? 'Claim Policy' : 'Pay Policy'}</SheetTitle>
// //             <SheetDescription>
// //               {action === 'Claim' ? 'Provide details for your claim.' : 'Enter payment details.'}
// //             </SheetDescription>
// //           </SheetHeader>
// //           <div className="grid gap-4 py-4">
// //             {selectedPolicy && (
// //               <>
// //                 <div className="grid grid-cols-4 items-center gap-4">
// //                   <Label htmlFor="policyNo" className="text-right">
// //                     Policy No
// //                   </Label>
// //                   <Input id="policyNo" value={selectedPolicy.policyNo} disabled className="col-span-3" />
// //                 </div>
// //                 <div className="grid grid-cols-4 items-center gap-4">
// //                   <Label htmlFor="policyName" className="text-right">
// //                     Policy Name
// //                   </Label>
// //                   <Input id="policyName" value={selectedPolicy.policyName} disabled className="col-span-3" />
// //                 </div>

// //                 {action === 'Claim' && (
// //                   <>
// //                     <div className="grid grid-cols-4 items-center gap-4">
// //                       <Label htmlFor="claimReason" className="text-right">
// //                         Claim Reason
// //                       </Label>
// //                       <Input
// //                         id="claimReason"
// //                         className={`col-span-3 ${formErrors.claimReason ? 'border-red-500' : ''}`}
// //                         placeholder="Enter reason for claim"
// //                         value={formValues.claimReason || ''}
// //                         onChange={handleInputChange}
// //                       />
// //                       {formErrors.claimReason && <span className="col-span-3 text-[0.8rem] text-red-500">{formErrors.claimReason}</span>}
// //                     </div>
// //                     <div className="grid grid-cols-4 items-center gap-4">
// //                       <Label htmlFor="additionalDetails" className="text-right">
// //                         Incident Description
// //                       </Label>
// //                       <Input
// //                         id="additionalDetails"
// //                         className={`col-span-3 ${formErrors.additionalDetails ? 'border-red-500' : ''}`}
// //                         placeholder="Enter Incident description"
// //                         value={formValues.additionalDetails || ''}
// //                         onChange={handleInputChange}
// //                       />
// //                       {formErrors.additionalDetails && <span className="col-span-3 text-[0.8rem] text-red-500">{formErrors.additionalDetails}</span>}
// //                     </div>
// //                     <div className="grid grid-cols-4 items-center gap-4">
// //                       <Label htmlFor="dateOfIncident" className="text-right">
// //                         Date of incident
// //                       </Label>
// //                       <Input
// //                         id="dateOfIncident"
// //                         type="date"
// //                         className={`col-span-3 ${formErrors.dateOfIncident ? 'border-red-500' : ''}`}
// //                         value={formValues.dateOfIncident || ''}
// //                         onChange={handleInputChange}
// //                       />
// //                       {formErrors.dateOfIncident && <span className="col-span-3 text-[0.8rem] text-red-500">{formErrors.dateOfIncident}</span>}
// //                     </div>
// //                   </>
// //                 )}

// //                 {action === 'Pay' && (
// //                   <>
// //                     <div className="grid grid-cols-4 items-center gap-4">
// //                       <Label htmlFor="cardNumber" className="text-right">
// //                         Card Number
// //                       </Label>
// //                       <Input
// //                         id="cardNumber"
// //                         className={`col-span-3 ${formErrors.cardNumber ? 'border-red-500' : ''}`}
// //                         placeholder="Enter Card Number"
// //                         value={formValues.cardNumber || ''}
// //                         onChange={handleInputChange}
// //                       />
// //                       {formErrors.cardNumber && <span className="col-span-3 text-[0.8rem] text-red-500">{formErrors.cardNumber}</span>}
// //                     </div>
// //                     <div className="grid grid-cols-4 items-center gap-4">
// //                       <Label htmlFor="cname" className="text-right">
// //                         Name on Card
// //                       </Label>
// //                       <Input
// //                         id="cname"
// //                         className={`col-span-3 ${formErrors.cname ? 'border-red-500' : ''}`}
// //                         placeholder="Enter Card Holder Name"
// //                         value={formValues.cname || ''}
// //                         onChange={handleInputChange}
// //                       />
// //                       {formErrors.cname && <span className="col-span-3 text-[0.8rem] text-red-500">{formErrors.cname}</span>}
// //                     </div>
// //                     <div className="grid grid-cols-4 items-center gap-4">
// //                       <Label htmlFor="expirydate" className="text-right">
// //                         Expiry date
// //                       </Label>
// //                       <Input
// //                         id="expirydate"
// //                         type="text"
// //                         placeholder="MM/YY"
// //                         className={`col-span-3 ${formErrors.expirydate ? 'border-red-500' : ''}`}
// //                         value={formValues.expirydate || ''}
// //                         onChange={handleInputChange}
// //                       />
// //                       {formErrors.expirydate && <span className="col-span-3 text-[0.8rem] text-red-500">{formErrors.expirydate}</span>}
// //                     </div>
// //                     <div className="grid grid-cols-4 items-center gap-4">
// //                       <Label htmlFor="cvv" className="text-right">
// //                         CVV
// //                       </Label>
// //                       <Input
// //                         id="cvv"
// //                         type="password"
// //                         className={`col-span-3 ${formErrors.cvv ? 'border-red-500' : ''}`}
// //                         placeholder="Enter CVV"
// //                         value={formValues.cvv || ''}
// //                         onChange={handleInputChange}
// //                       />
// //                       {formErrors.cvv && <span className="col-span-3 text-[0.8rem] text-red-500">{formErrors.cvv}</span>}
// //                     </div>
// //                   </>
// //                 )}
// //               </>
// //             )}
// //           </div>
// //           <SheetFooter className='flex flex-col flex-1'>
// //             <Button className='w-1/2 bg-destructive hover:bg-destructive/80' onClick={() => setOpen(false)}>Cancel</Button>
// //             <Button
// //               type="button"
// //               className='w-1/2'
// //               onClick={handleSubmit}
// //               disabled={!isFormValid}
// //             >
// //               {action === 'Claim' ? 'Submit Claim' : 'Pay Now'}
// //             </Button>
// //           </SheetFooter>
// //         </SheetContent>
// //       </Sheet>

// //       <ToastContainer />
// //     </>
// //   );
// // };

// // export default UserDashboard;
// import React, { useState, useEffect } from 'react';
// import { Plus } from 'lucide-react';
// import axios from 'axios';
// import { axiosInstance } from '../../services/api'
// import {
//   Table,
//   TableBody,
//   TableHead,
//   TableHeader,
//   TableRow,
//   TableCell,
// } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Sheet,
//   SheetContent,
//   SheetHeader,
//   SheetTitle,
//   SheetDescription,
//   SheetFooter,
// } from "@/components/ui/sheet";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const UserDashboard = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedPolicy, setSelectedPolicy] = useState(null);
//   const [action, setAction] = useState(null);
//   const [formValues, setFormValues] = useState({});
//   const [formErrors, setFormErrors] = useState({});
//   const [isFormValid, setIsFormValid] = useState(false);
//   const [policies, setPolicies] = useState([
    
//     {
//       policyNo: 1,
//       policyName: "VitalSecure Life Plan",
//       planMonths: 12,
//       planYears: 1,
//       policyHolderName: "John Doe",
//       policyHolderAadhar: "1234 5678 9012",
//       policyHolderPAN: "ABCDE1234F",
//       nominee: "Amy Doe",
//       amount: "₹750",
//       status: "",
//     },
    
//   ]);

//   useEffect(() => {
//     validateForm();
//   }, [formValues]);

//   const openSheetWithPolicy = (policy, actionType) => {
//     setSelectedPolicy(policy);
//     setAction(actionType);
//     setOpen(true);
//     setFormValues({});
//     setFormErrors({});
//   };

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setFormValues({ ...formValues, [id]: value });
//   };

//   const validateForm = () => {
//     const errors = {};
//     const requiredFields = action === 'Claim'
//       ? ['claimReason', 'additionalDetails', 'dateOfIncident']
//       : ['cardNumber', 'cname', 'expirydate', 'cvv'];

//     requiredFields.forEach(field => {
//       if (!formValues[field]) {
//         errors[field] = 'This field is required';
//       }
//     });

//     setFormErrors(errors);
//     setIsFormValid(Object.keys(errors).length === 0);
//   };
//   const formatDateToYMD = (date) => {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
//     const day = String(date.getDate()).padStart(2, '0');
//     return `${year}-${month}-${day}`;
//   };
  
//   // const handleSubmit = async () => {
//   //   try {
//   //     console.log("Attempting to submit claim...");
//   //     if (action === 'Claim') {
//   //       console.log("Sending claim request...");
  
        
//   //       const formattedDate = formatDateToYMD(new Date(formValues.dateOfIncident));

//   //       const claimData = {
//   //         // policy_no: selectedPolicy.policyNo, // Ensure this is mapped correctly in the backend
//   //         customerPolicy: { policyNo: selectedPolicy.policyNo }, 
//   //         amountPerMonth: selectedPolicy.amount.replace('₹', '').trim(), // Remove currency symbol and trim spaces
//   //         dateOfIncident: formattedDate, // Ensure format is 'YYYY-MM-DD'
//   //         claimReason: formValues.claimReason,
//   //         incidentDescription: formValues.additionalDetails,
//   //       };
        
//   //       console.log(claimData);
        
  
//   //       await axiosInstance.post('http://localhost:8080/claims', claimData);
//   //       // await axios.post('http://localhost:8080/claims', claimData);
  
//   //       toast.info("Your claim is being processed. You will be notified shortly.");
//   //     } else {
//   //       // Handle payment logic
//   //       console.log("Handling payment...");
//   //       toast.success("Payment successful", {
//   //         icon: "✔️",
//   //       });
//   //     }
//   //     setOpen(false);
//   //   } catch (error) {
//   //     console.error("Error:", error);
//   //     toast.error("An error occurred. Please try again.");
//   //   }
//   // };
  
  
//   const handleSubmit = async () => {
//     try {
//         if (action === 'Claim') {
//             const formattedDate = formatDateToYMD(new Date(formValues.dateOfIncident));

//             const claimData = {
//                 customerPolicy: { policyNo: selectedPolicy.policyNo }, // Pass the full object
//                 amountPerMonth: selectedPolicy.amount.replace('₹', '').trim(),
//                 dateOfIncident: formattedDate,
//                 claimReason: formValues.claimReason,
//                 incidentDescription: formValues.additionalDetails,
//             };

//             await axiosInstance.post('http://localhost:8080/claims', claimData);
//             toast.info("Your claim is being processed. You will be notified shortly.");
//         } else {
//             toast.success("Payment successful", { icon: "✔️" });
//         }
//         setOpen(false);
//     } catch (error) {
//         console.error("Error:", error);
//         toast.error("An error occurred. Please try again.");
//     }
// };

  

//   return (
//     <>
//       <Card>
//         <CardHeader className='w-full flex flex-row justify-between items-center'>
//           <CardTitle> My Policies</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead className="w-[100px]">Policy No</TableHead>
//                 <TableHead>Policy Name</TableHead>
//                 <TableHead>Duration (Months/Years)</TableHead>
//                 <TableHead>Policy Holder Name</TableHead>
//                 <TableHead>Policy Holder Aadhar No</TableHead>
//                 <TableHead>Policy Holder PAN No</TableHead>
//                 <TableHead>Nominee</TableHead>
//                 <TableHead>Amount (per month)</TableHead>
//                 <TableHead className="text-center w-[200px]">Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {policies.map((policy) => (
//                 <TableRow key={policy.policyNo}>
//                   <TableCell className="font-medium">{policy.policyNo}</TableCell>
//                   <TableCell>{policy.policyName}</TableCell>
//                   <TableCell>{policy.planMonths} Months / {policy.planYears} Years</TableCell>
//                   <TableCell>{policy.policyHolderName}</TableCell>
//                   <TableCell>{policy.policyHolderAadhar}</TableCell>
//                   <TableCell>{policy.policyHolderPAN}</TableCell>
//                   <TableCell>{policy.nominee}</TableCell>
//                   <TableCell className="text-right">{policy.amount}</TableCell>
//                   <TableCell className="text-right">
//                     <Button variant="ghost" size="sm" className="mr-2 bg-customGreen rounded-3xl" onClick={() => openSheetWithPolicy(policy, 'Claim')}>
//                       Claim
//                     </Button>
//                     <Button variant="ghost" size="sm" className="bg-customGreen rounded-3xl" onClick={() => openSheetWithPolicy(policy, 'Pay')}>
//                       Pay 
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>

//       <Sheet open={open} onOpenChange={() => setOpen(false)}>
//         <SheetContent>
//           <SheetHeader>
//             <SheetTitle>{action === 'Claim' ? 'Claim Policy' : 'Pay Policy'}</SheetTitle>
//             <SheetDescription>
//               {action === 'Claim' ? 'Provide details for your claim.' : 'Enter payment details.'}
//             </SheetDescription>
//           </SheetHeader>
//           <div className="grid gap-4 py-4">
//             {selectedPolicy && (
//               <>
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <Label htmlFor="policyNo" className="text-right">
//                     Policy No
//                   </Label>
//                   <Input id="policyNo" value={selectedPolicy.policyNo} disabled className="col-span-3" />
//                 </div>
//                 <div className="grid grid-cols-4 items-center gap-4">
//                   <Label htmlFor="policyName" className="text-right">
//                     Policy Name
//                   </Label>
//                   <Input id="policyName" value={selectedPolicy.policyName} disabled className="col-span-3" />
//                 </div>

//                 {action === 'Claim' && (
//                   <>
//                     <div className="grid grid-cols-4 items-center gap-4">
//                       <Label htmlFor="claimReason" className="text-right">
//                         Claim Reason
//                       </Label>
//                       <Input
//                         id="claimReason"
//                         className={`col-span-3 ${formErrors.claimReason ? 'border-red-500' : ''}`}
//                         placeholder="Enter reason for claim"
//                         value={formValues.claimReason || ''}
//                         onChange={handleInputChange}
//                       />
//                       {formErrors.claimReason && <span className="col-span-3 text-[0.8rem] text-red-500">{formErrors.claimReason}</span>}
//                     </div>
//                     <div className="grid grid-cols-4 items-center gap-4">
//                       <Label htmlFor="additionalDetails" className="text-right">
//                         Incident Description
//                       </Label>
//                       <Input
//                         id="additionalDetails"
//                         className={`col-span-3 ${formErrors.additionalDetails ? 'border-red-500' : ''}`}
//                         placeholder="Enter Incident description"
//                         value={formValues.additionalDetails || ''}
//                         onChange={handleInputChange}
//                       />
//                       {formErrors.additionalDetails && <span className="col-span-3 text-[0.8rem] text-red-500">{formErrors.additionalDetails}</span>}
//                     </div>
//                     <div className="grid grid-cols-4 items-center gap-4">
//                       <Label htmlFor="dateOfIncident" className="text-right">
//                         Date of incident
//                       </Label>
//                       <Input
//                         id="dateOfIncident"
//                         type="input"
//                         placeholder="yyyy-mm-dd"
//                         className={`col-span-3 ${formErrors.dateOfIncident ? 'border-red-500' : ''}`}
//                         value={formValues.dateOfIncident || ''}
//                         onChange={handleInputChange}
//                       />
//                       {formErrors.dateOfIncident && <span className="col-span-3 text-[0.8rem] text-red-500">{formErrors.dateOfIncident}</span>}
//                     </div>
//                   </>
//                 )}

//                 {action === 'Pay' && (
//                   <>
//                     <div className="grid grid-cols-4 items-center gap-4">
//                       <Label htmlFor="cardNumber" className="text-right">
//                         Card Number
//                       </Label>
//                       <Input
//                         id="cardNumber"
//                         type="text"
//                         placeholder="Enter your card number"
//                         className={`col-span-3 ${formErrors.cardNumber ? 'border-red-500' : ''}`}
//                         value={formValues.cardNumber || ''}
//                         onChange={handleInputChange}
//                       />
//                       {formErrors.cardNumber && <span className="col-span-3 text-[0.8rem] text-red-500">{formErrors.cardNumber}</span>}
//                     </div>
//                     <div className="grid grid-cols-4 items-center gap-4">
//                       <Label htmlFor="cname" className="text-right">
//                         Cardholder Name
//                       </Label>
//                       <Input
//                         id="cname"
//                         type="text"
//                         placeholder="Enter cardholder name"
//                         className={`col-span-3 ${formErrors.cname ? 'border-red-500' : ''}`}
//                         value={formValues.cname || ''}
//                         onChange={handleInputChange}
//                       />
//                       {formErrors.cname && <span className="col-span-3 text-[0.8rem] text-red-500">{formErrors.cname}</span>}
//                     </div>
//                     <div className="grid grid-cols-4 items-center gap-4">
//                       <Label htmlFor="expirydate" className="text-right">
//                         Expiry Date
//                       </Label>
//                       <Input
//                         id="expirydate"
//                         type="month"
//                         placeholder="Enter expiry date"
//                         className={`col-span-3 ${formErrors.expirydate ? 'border-red-500' : ''}`}
//                         value={formValues.expirydate || ''}
//                         onChange={handleInputChange}
//                       />
//                       {formErrors.expirydate && <span className="col-span-3 text-[0.8rem] text-red-500">{formErrors.expirydate}</span>}
//                     </div>
//                     <div className="grid grid-cols-4 items-center gap-4">
//                       <Label htmlFor="cvv" className="text-right">
//                         CVV
//                       </Label>
//                       <Input
//                         id="cvv"
//                         type="text"
//                         placeholder="Enter CVV"
//                         className={`col-span-3 ${formErrors.cvv ? 'border-red-500' : ''}`}
//                         value={formValues.cvv || ''}
//                         onChange={handleInputChange}
//                       />
//                       {formErrors.cvv && <span className="col-span-3 text-[0.8rem] text-red-500">{formErrors.cvv}</span>}
//                     </div>
//                   </>
//                 )}
//               </>
//             )}
//           </div>
//           <SheetFooter>
//             <Button
//               type="button"
//               variant="outline"
//               onClick={() => setOpen(false)}
//               className="mr-4"
//             >
//               Cancel
//             </Button>
//             <Button
//               type="button"
//               onClick={handleSubmit}
//               disabled={!isFormValid}
//             >
//               {action === 'Claim' ? 'Submit Claim' : 'Pay Now'}
//             </Button>
//           </SheetFooter>
//         </SheetContent>
//       </Sheet>
//       <ToastContainer />
//     </>
//   );
// };

// export default UserDashboard;

import React, { useState, useEffect } from 'react';
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
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authService } from '@/services/auth';
import {axiosInstance} from '../../services/api'; // Import the axiosInstance

// Function to fetch user policies with action = 1
const fetchUserPolicies = async () => {
  // try {
  //   const response = await axiosInstance.get('/customer-policies/verified');
  //   console.log('Fetched policies:', response.data); // Debugging log
  //   return response.data;
  // } catch (error) {
  //   console.error('Error fetching verified policies:', error);
  //   throw error;
  // }
  
const email = authService.getUserEmail;

try {
  const response = await axiosInstance.get(`/customer-policies/verified`, {
    params: { email }
  });
  console.log('Fetched policies:', response.data); // Debugging log
  return response.data;
} catch (error) {
  console.error('Error fetching verified policies:', error);
  throw error;
}

};

const UserDashboard = () => {
  const [open, setOpen] = useState(false);
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [action, setAction] = useState(null);
  const [formValues, setFormValues] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [policies, setPolicies] = useState([]);

  useEffect(() => {
    // Fetch user policies with action = 1 on component mount
    fetchUserPolicies()
      .then(filteredPolicies => {
        setPolicies(filteredPolicies);
        console.log('Policies set:', filteredPolicies); // Debugging log
      })
      .catch(error => {
        console.error('There was an error fetching the policies!', error);
      });
  }, []);

  useEffect(() => {
    validateForm();
  }, [formValues]);

  const openSheetWithPolicy = (policy, actionType) => {
    setSelectedPolicy(policy);
    setAction(actionType);
    setOpen(true);
    setFormValues({});
    setFormErrors({});
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const validateForm = () => {
    const errors = {};
    const requiredFields = action === 'Claim'
      ? ['claimReason', 'additionalDetails', 'dateOfIncident']
      : ['cardNumber', 'cname', 'expirydate', 'cvv'];

    requiredFields.forEach(field => {
      if (!formValues[field]) {
        errors[field] = 'This field is required';
      }
    });

    setFormErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = () => {
    if (action === 'Claim') {
      const claimData = {
        customerPolicy: {
          policyNo: selectedPolicy.policyNo  // Ensure policyNo is included here
        },
        amountPerMonth: selectedPolicy.policyAmount / selectedPolicy.policyDuration,
        claimReason: formValues.claimReason,
        incidentDescription: formValues.additionalDetails,
        dateOfIncident: formValues.dateOfIncident,
        action: false
      };
  
      console.log(claimData);  // For debugging
  
      axiosInstance.post('/claims', claimData)
        .then(response => {
          toast.success('Claim filed successfully');
          setOpen(false);
        })
        .catch(error => {
          toast.error('Error filing claim');
          console.error('Error filing claim:', error);
        });
    } else {
      toast.success("Payment successful", {
        icon: "✔",
      });
      setOpen(false);
    }
  };
  

  return (
    <>
      <Card>
        <CardHeader className='w-full flex flex-row justify-between items-center'>
          <CardTitle> My Policies</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Policy No</TableHead>
                <TableHead>Policy Name</TableHead>
                <TableHead>Duration (Months)</TableHead>
                <TableHead>Policy Holder Name</TableHead>
                <TableHead>Policy Holder Aadhar No</TableHead>
                <TableHead>Policy Holder PAN No</TableHead>
                <TableHead>Nominee</TableHead>
                <TableHead>Amount (per month)</TableHead>
                <TableHead className="text-center w-[200px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {policies.length > 0 ? (
                policies.map((policy) => (
                  <TableRow key={policy.policyNo}>
                    <TableCell className="font-medium">{policy.policyNo}</TableCell>
                    <TableCell>{policy.policyName}</TableCell>
                    <TableCell>{policy.policyDuration} Months </TableCell>
                    <TableCell>{policy.policyHolderName}</TableCell>
                    <TableCell>{policy.aadharNo}</TableCell>
                    <TableCell>{policy.panCardNo}</TableCell>
                    <TableCell>{policy.nomineeName}</TableCell>
                    <TableCell className="text-right">{(policy.policyAmount / policy.policyDuration).toFixed(2)}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="mr-2 bg-customGreen rounded-3xl" onClick={() => openSheetWithPolicy(policy, 'Claim')}>
                        Claim
                      </Button>
                      <Button variant="ghost" size="sm" className="bg-customGreen rounded-3xl" onClick={() => openSheetWithPolicy(policy, 'Pay')}>
                        Pay Now
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan="9" className="text-center">No policies available</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Sheet open={open} onOpenChange={() => setOpen(false)}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>{action === 'Claim' ? 'Claim Policy' : 'Pay Policy'}</SheetTitle>
            <SheetDescription>
              {action === 'Claim' ? 'Provide details for your claim.' : 'Enter payment details.'}
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            {selectedPolicy && (
              <>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="policyNo" className="text-right">
                    Policy No
                  </Label>
                  <Input id="policyNo" value={selectedPolicy.policyNo} disabled className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="policyName" className="text-right">
                    Policy Name
                  </Label>
                  <Input id="policyName" value={selectedPolicy.policyName} disabled className="col-span-3" />
                </div>

                {action === 'Claim' && (
                  <>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="claimReason" className="text-right">
                        Claim Reason
                      </Label>
                      <Input
                        id="claimReason"
                        className={`col-span-3 ${formErrors.claimReason ? 'border-red-500' : ''}`}
                        placeholder="Enter reason for claim"
                        value={formValues.claimReason || ''}
                        onChange={handleInputChange}
                      />
                      {formErrors.claimReason && <span className="col-span-3 text-red-500">{formErrors.claimReason}</span>}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="additionalDetails" className="text-right">
                        Incident Description
                      </Label>
                      <Input
                        id="additionalDetails"
                        className={`col-span-3 ${formErrors.additionalDetails ? 'border-red-500' : ''}`}
                        placeholder="Enter Incident description"
                        value={formValues.additionalDetails || ''}
                        onChange={handleInputChange}
                      />
                      {formErrors.additionalDetails && <span className="col-span-3 text-red-500">{formErrors.additionalDetails}</span>}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="dateOfIncident" className="text-right">
                        Date of Incident
                      </Label>
                      <Input
                        id="dateOfIncident"
                        type="date"
                        className={`col-span-3 ${formErrors.dateOfIncident ? 'border-red-500' : ''}`}
                        value={formValues.dateOfIncident || ''}
                        onChange={handleInputChange}
                      />
                      {formErrors.dateOfIncident && <span className="col-span-3 text-red-500">{formErrors.dateOfIncident}</span>}
                    </div>
                  </>
                )}

                {action === 'Pay' && (
                  <>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="cardNumber" className="text-right">
                        Card Number
                      </Label>
                      <Input
                        id="cardNumber"
                        className={`col-span-3 ${formErrors.cardNumber ? 'border-red-500' : ''}`}
                        placeholder="Enter Card Number"
                        value={formValues.cardNumber || ''}
                        onChange={handleInputChange}
                      />
                      {formErrors.cardNumber && <span className="col-span-3 text-red-500">{formErrors.cardNumber}</span>}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="cname" className="text-right">
                        Cardholder Name
                      </Label>
                      <Input
                        id="cname"
                        className={`col-span-3 ${formErrors.cname ? 'border-red-500' : ''}`}
                        placeholder="Enter Cardholder Name"
                        value={formValues.cname || ''}
                        onChange={handleInputChange}
                      />
                      {formErrors.cname && <span className="col-span-3 text-red-500">{formErrors.cname}</span>}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="expirydate" className="text-right">
                        Expiry Date
                      </Label>
                      <Input
                        id="expirydate"
                        type="date"
                        className={`col-span-3 ${formErrors.expirydate ? 'border-red-500' : ''}`}
                        value={formValues.expirydate || ''}
                        onChange={handleInputChange}
                      />
                      {formErrors.expirydate && <span className="col-span-3 text-red-500">{formErrors.expirydate}</span>}
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="cvv" className="text-right">
                        CVV
                      </Label>
                      <Input
                        id="cvv"
                        className={`col-span-3 ${formErrors.cvv ? 'border-red-500' : ''}`}
                        placeholder="Enter CVV"
                        value={formValues.cvv || ''}
                        onChange={handleInputChange}
                      />
                      {formErrors.cvv && <span className="col-span-3 text-red-500">{formErrors.cvv}</span>}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          <SheetFooter>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={!isFormValid}
              className="bg-customGreen text-white"
            >
              {action === 'Claim' ? 'Submit Claim' : 'Make Payment'}
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <ToastContainer />
    </>
  );
};

export default UserDashboard;