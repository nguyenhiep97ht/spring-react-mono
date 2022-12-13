import { TextField, Button } from 'Frontend/components/cores';
import { Formik, useFormik } from 'formik';
import { IconPlus } from '@tabler/icons';
import { replacer, toNumber, toPhone } from 'Frontend/utils/MyUtils';
import { replace } from 'lodash';
import TableExample from './TableExample';
import { useState } from 'react';
import { createStyles, Stack, Text } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  title: {
    color: theme.colors.blue[3],
    fontSize: 24,
  },
}));
// import * as cn from 'classnames';
export default function GuidLineView() {
  const { classes } = useStyles();
  const [users, setUsers] = useState<any[]>([]);
  const form = useFormik({
    initialValues: {
      phone: '0971826117',
      email: 'hiepn06@gmail.com',
      price: 3000000,
    },
    onSubmit: (values, { setSubmitting }) => {
      console.log('values :>> ', values);
      setUsers([
        ...users,
        {
          phone: toPhone(values.phone),
          email: values.email,
          price: toNumber(values.price),
        },
      ]);
      setTimeout(() => {
        alert(
          JSON.stringify(
            {
              phone: toPhone(values.phone),
              email: values.email,
              price: toNumber(values.price),
            },
            null,
            2
          )
        );
        setSubmitting(false);
      }, 400);
    },
    validate: (values: { email: string; phone: string }) => {
      const errors = {} as { email?: string; phone?: string };
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if (!values.phone) {
        errors.phone = 'Required';
      } else if (!/^[0][0-9]{9}$/g.test(replace(values.phone, new RegExp(/[\s]/, 'g'), ''))) {
        errors.phone = 'Invalid phone';
      }
      return errors;
    },
  });

  return (
    // <div
    //   className={cn('flex', 'flex-col', 'h-full', 'items-center', 'justify-center', 'p-l', 'text-center', 'box-border')}
    // >
    //   <img style={{ width: '200px' }} src="images/empty-plant.png" />
    // </div>
    <div>
      <h3>Form</h3>

      <form onSubmit={form.handleSubmit}>
        <div className="flex flex-col">
          <div>
            <p className="m-0 p-0">Email: </p>
            <TextField name="email" onChange={form.handleChange} value={form.values.email} />
            {form.errors.email && form.touched.email && <p className="text-error m-0 p-0">{form.errors.email}</p>}
          </div>

          <div>
            <p className="m-0 p-0">Phone: </p>
            <TextField
              name="phone"
              onChange={form.handleChange}
              maxlength={12}
              // value={form.values.phone}
              value={`${form.values.phone}`.replace(/^([0-9]{4})([0-9]{3})([0-9]{3})$/g, replacer)}
              onKeyUp={(evt) => {
                form.setFieldValue(
                  'phone',
                  `${(evt.target as HTMLInputElement).value}`.replace(/^([0-9]{4})([0-9]{3})([0-9]{3})$/g, replacer)
                );
              }}
              onKeyDown={(evt) => {
                if ((evt.which != 8 && evt.which != 0 && evt.which < 48) || evt.which > 57) {
                  evt.preventDefault();
                }
              }}
            />
            {form.errors.phone && form.touched.phone && <p className="text-error m-0 p-0">{form.errors.phone}</p>}
          </div>

          <div>
            <p className="m-0 p-0">Price: </p>
            <TextField
              name="price"
              onChange={form.handleChange}
              value={`${form.values.price}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              onKeyUp={(evt) => {
                form.setFieldValue('price', `${(evt.target as HTMLInputElement).value}`.replace(/\đ\s?|(,*)/g, ''));
              }}
              onKeyDown={(evt) => {
                if ((evt.which != 8 && evt.which != 0 && evt.which < 48) || evt.which > 57) {
                  evt.preventDefault();
                }
              }}
            />
            {form.errors.price && form.touched.price && <p className="text-error m-0 p-0">{form.errors.price}</p>}
          </div>

          <div>
            <Button type="submit" disable={form.isSubmitting} loading={form.isSubmitting}>
              <span>Submit</span>
            </Button>
          </div>
        </div>
      </form>

      <h3>Table</h3>
      <TableExample items={users} />

      <h3>Mantine</h3>
      <Stack spacing={'lg'}>
        <Text className={classes.title}>1</Text>
        <Text className={classes.title}>2</Text>
        <Text className={classes.title}>3</Text>
        <Text className={classes.title}>4</Text>
      </Stack>
    </div>
  );
}
