import AddProperty from './components/AddProperty/AddProperty'
import PageTitle from './components/PageTitle/PageTitle'
const addproperty = () => {
    return (
        <>
            {
                PageTitle('Add Property')
            }

            <AddProperty/>

        </>
    )
}

export default addproperty
