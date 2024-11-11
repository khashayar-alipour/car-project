import { useRouter } from "next/router"
import carsData from "../../data/carsData"
import CarDetails from "../../components/templates/CarDetails"

function carDetails() {

    const router = useRouter()
    const {carId} = router.query
    const carDetails = carsData[carId - 1]

  return ( <CarDetails {...carDetails}/>  )
}

export default carDetails