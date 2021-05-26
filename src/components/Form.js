import { LockClosedIcon } from "@heroicons/react/solid";

const Form = ({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  touched,
  values,
  favAirline,
}) => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Hola, bienvenido, sabemos que quieres viajar en{" "}
              <span className="bg-gray-300">{favAirline}</span>, por favor
              diligencia el siguiente formulario
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="name" className="sr-only">
                  Primer Nombre *
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Ingresa tu primer nombre"
                />
                {touched.name && errors.name}
              </div>
              <div>
                <label htmlFor="first-name" className="sr-only">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Ingresa tu Email"
                />
                {touched.email && errors.email}
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Teléfono *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="number"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Ingresa tu Número de Cel."
                />
                {touched.phone && errors.phone}
              </div>
              <div>
                <label htmlFor="age" className="sr-only">
                  Edad *
                </label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  value={values.age || ""}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Ingresa tu Edad"
                />
                {touched.age && errors.age}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
