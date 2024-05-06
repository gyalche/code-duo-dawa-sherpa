import { useQuery } from "react-query"
import { getSpell } from "../api/spell"
import { Box } from "@mui/material";
import { cardType } from '../@types/index';
import BasicCard from "../components/card";
import { Layout } from "./Layout";

const HomePage = () => {
    const {data, isLoading, isSuccess, isError, refetch}=useQuery('get-spell', getSpell);

    console.log("mydata", data)
    return (
        <Layout>

                <div className="card-display">
                    {data?.results?.map((data:cardType, index:number)=>(
                        <Box sx={{padding:'10px'}} key={index}>
                            <BasicCard data={data} />
                        </Box>
                    ))}
                </div>
        </Layout>

    )
}

export default HomePage
