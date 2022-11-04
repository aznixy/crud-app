import { useState, useEffect } from 'react';

import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getPhones, deletePhone } from '../Service/api';
import { Link } from 'react-router-dom';

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;


const AllPhones = () => {
    const [phones, setPhones] = useState([]);
    
    useEffect(() => {
        getAllPhones();
    }, []);

    const deletePhoneData = async (id) => {
        await deletePhone(id);
        getAllPhones();
    }

    const getAllPhones = async () => {
        let response = await getPhones();
        setPhones(response.data);
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Price</TableCell>
                    <TableCell>Rating</TableCell>
                    <TableCell>Warranty_years</TableCell>
                    <TableCell>Available</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {phones.map((phone) => (
                    <TRow key={phone.id}>
                        <TableCell>{phone.id}</TableCell>
                        <TableCell>{phone.name}</TableCell>
                        <TableCell>{phone.type}</TableCell>
                        <TableCell>{phone.price}</TableCell>
                        <TableCell>{phone.rating}</TableCell>
                        <TableCell>{phone.warranty_years}</TableCell>
                        <TableCell>{phone.available}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${phone.id}`}>Edit</Button>
                            <Button color="secondary" variant="contained" onClick={() => deletePhoneData(phone.id)}>Delete</Button> 
                        </TableCell>
                    </TRow>
                ))}
            </TableBody>
        </StyledTable>
    )
}

export default AllPhones;