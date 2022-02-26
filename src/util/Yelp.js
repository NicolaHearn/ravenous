const apiKey = 'Y_zLyG4DP6abczych-9CphWKige-L58sybW5iEyZZD6MNLsl5WvPEC-xROwyF8CjNkficLDEf_WlKbNGQte2QhFmilsOxk4rShIpQ4wsaw0rKhwSyR24ufXpuveEYXYx'

const Yelp = {
    searchYelp(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                },
            }).then(response => {
                return response.json();
            }).then((jsonResponse) => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map((business) => {
                        console.log(business)
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.address,
                            city: business.city,
                            state: business.state,
                            zipCode: business.zipCode,
                            category: business.category,
                            rating: business.rating,
                            reviewCount: business.reviewCount

                        }
                    })
                }
            });
    }
}

export default Yelp