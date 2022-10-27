import { FC, useEffect, useRef, useState } from "react"
import { DuckProspectType } from "../services/duck"
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup"
import { v4 } from "uuid"
import { F } from "ramda"
import Button from "./Button"

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required")
})

type Props = {
  hireDuck: (prospect: DuckProspectType) => void
}

const HireDuckForm: FC<Props> = ({ hireDuck }) => {
  const ref = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    ref.current?.focus()
  }, [])

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: ""
      }}
      onSubmit={(values) => {
        console.log(values, "Form Submit")
        const prospect: DuckProspectType = {
          ...values,
          id: v4(),
          email: "example@example.com",
          salary: 0,
          isAdmin: false,
          birthDay: "2022-05-10",
          relatedToCEO: true,
          isCannibal: false,
          migratesForWinters: false,
          wingedness: "r",
          gender: 1
        }

        hireDuck(prospect)
      }}
      validateOnMount
      validationSchema={schema}
    >
      {({ values, isValid }) => {
        return (
          <Form>
            <div>
              <label>Etunimi</label>
              <Field type="text" name="firstName" />
              <ErrorMessage name="firstName" />
            </div>
            <div>
              <label>Sukunimi</label>
              <Field type="text" name="lastName" />
              <ErrorMessage name="lastName" />
            </div>
            <div>
              <Button disabled={!isValid} type="submit" ref={ref}>
                Ota mukaan jengiin
              </Button>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}

export default HireDuckForm
