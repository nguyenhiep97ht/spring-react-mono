import { TextField, Button } from 'Frontend/components/cores';
import { Formik } from 'formik';

// import * as cn from 'classnames';
export default function GuidLineView() {
  return (
    // <div
    //   className={cn('flex', 'flex-col', 'h-full', 'items-center', 'justify-center', 'p-l', 'text-center', 'box-border')}
    // >
    //   <img style={{ width: '200px' }} src="images/empty-plant.png" />
    // </div>
    <div>
      <h3>Form</h3>
      <Formik
        initialValues={{ email: '' }}
        validate={(values) => {
          const errors = {} as { email?: string };
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <p className="m-0 p-0">Email: </p>
            <TextField name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
            {errors.email && touched.email && <p>{errors.email}</p>}

            <div>
              <Button type="submit" disable={isSubmitting} loading={isSubmitting}>
                Submit
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
