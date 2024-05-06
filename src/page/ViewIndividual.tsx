import { useQuery } from 'react-query';
import { Layout } from './Layout'
import { useParams } from 'react-router-dom'
import { getIndividualSpell } from '../api/spell';

const ViewIndividual = () => {
    const params=useParams();
    const {data:individualSpell, isLoading, isSuccess, isError}=useQuery('get-single-spell', getIndividualSpell(params?.name))
    console.log("this is my individual spell", individualSpell)
    return (
        <Layout>
        <div>
            Ivdiviudal view
        </div>
        </Layout>
       
    )
}

export default ViewIndividual
