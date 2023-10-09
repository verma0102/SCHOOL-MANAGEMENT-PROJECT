import { Table } from "reactstrap";
import { HiMinusCircle,HiOutlinePencil,HiOutlineX,HiOutlineCheck } from "react-icons/hi";

const StudentList = () => {
return(
    <div className="content">
<Table>
    <thead>
        <tr>
            <th> Reference No </th>
            <th> Student Name </th>
            <th> Class </th>
            <th> Father Name </th>
            <th> Date of Birth</th>
            <th> Gender </th>
            <th> Category </th>
            <th> Student Mobile Number </th>
            <th> Form Status </th>
            <th> Payment Status </th>
            <th> Enrolled </th>
            <th> Created At </th>
            <th> Action </th>
        </tr>
        <tr>
            <td>560671</td>
            <td>Jany Martin</td>
            <td>Class 4(A)</td>
            <td>Gary Martin</td>
            <td>11/17/2017</td>
            <td>Female</td>
            <td>General</td>
            <td>890876787</td>
            <td>Not Submitted</td>
            <td>Unpaid</td>
            <td><HiMinusCircle size={23} /></td>
            <td>07/07/23</td>
<td><HiOutlinePencil size={20} /><HiOutlineX size={20} /></td>
        </tr>

        <tr>
            <td>606570</td>
            <td>Emily Thomas</td>
            <td>Class 2(A)</td>
            <td>David</td>
            <td>07/16/2015</td>
            <td>Female</td>
            <td>General</td>
            <td>8907867876</td>
            <td>Submitted</td>
            <td>Paid</td>
            <td><HiOutlineCheck size={23} /></td>
            <td>06/01/2023</td>
            <td><HiOutlinePencil size={20} /><HiOutlineX size={20} /></td>
        </tr>
       
    </thead>
</Table>
    </div>
)
}

export default StudentList;