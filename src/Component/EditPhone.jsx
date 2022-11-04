import { useState, useEffect } from 'react';

import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { getPhones, editPhone } from '../Service/api';

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
        margin-top: 20px
`;


const EditPhone = () => {
    const [phone, setPhone] = useState(initialValue);
    const { name, type, price, rating, warranty_years,available } = phone;
    const { id } = useParams();
    
    let navigate = useNavigate();

    useEffect(() => {
        loadPhoneDetails();
    }, []);

    const loadPhoneDetails = async() => {
        const response = await getPhones(id);
        setPhone(response.data);
    }

    const editPhoneDetails = async() => {
        const response = await editPhone(id, phone);
        navigate('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setPhone({...phone, [e.target.name]: e.target.value})
    }

    return (
        <Container>
            <Typography variant="h4">Edit Information</Typography>


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
                <Button variant="contained" color="primary" onClick={() => editPhoneDetails()}>Edit Phone</Button>
            </FormControl>
        </Container>
    )
}

export default EditPhone;