import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer u0SlI1X-_X2cMV2oYfhagUpQtr5_wbgJdIJ6EJUZcQIRGXRMTOHZ5JuYevUfCFgKUUQ2qTDOW8JfOYusJKNdCBuND31lMh6PtsLEf8yllIe1SlJzgh0ZTK9u0-tcYnYx",
  },
});
