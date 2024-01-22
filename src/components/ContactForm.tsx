//@ts-ignore
import { useSubmit } from "react-router-dom"
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseModel, chooseType, chooseLicense_plate } from "../redux/slices/RootSlice"

interface ContactFormProps {
  id?: string[];
  onClose: () => void;
}

const ContactForm = ( props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.model } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(chooseModel(data.model));
      dispatch(chooseType(data.type));
      dispatch(chooseLicense_plate(data.license_plate));
      // dispatch(choosePhone(data.phone_number));
      // dispatch(chooseAddress(data.address));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Model</label>
          <Input {...register('model')} name='model' placeholder="Model" />
        </div>
        <div>
          <label htmlFor="name">Type</label>
          <Input {...register('type')} name='type' placeholder="Type" />
        </div>
        <div>
          <label htmlFor="email">License Plate</label>
          <Input {...register('license_plate')} name='license_plate' placeholder="License Plate" />
        </div>
        {/* <div>
          <label htmlFor="phone_number">Phone Number</label>
          <Input {...register('phone_number')} name='phone_number' placeholder="Phone Number" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <Input {...register('address')} name='address' placeholder="Address" />
        </div> */}
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm