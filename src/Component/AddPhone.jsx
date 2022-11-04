import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addPhone } from '../Service/api';
import { useNavigate } from 'react-router-dom';

const initialValue = {
    name: '',
    type: '',
    price: '',
    rating: '',
    warranty_years :'',
    available : ''

}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddPhone = () => {
    const [phone, setPhone] = useState(initialValue);
    const { name, type, price, rating,warranty_years,available } = phone;
    let navigate = useNavigate();

    const onValueChange = (e) => {
        setPhone({...phone, [e.target.name]: e.target.value})
    }

    const addPhoneDetails = async() => {
        await addPhone(phone);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add Phone</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Type</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='type' value={type} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Price</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='price' value={price} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Rating</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='rating' value={rating} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Warranty_years</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='warranty_years' value={warranty_years} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Available</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='available' value={available} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addPhoneDetails()}>Add Phone</Button>
            </FormControl>
        </Container>
    )
}

export default AddPhone;