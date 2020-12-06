import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'Bearer wiXC9T8lqoQTjS_b6UlrGz1DPYS4ItrBtSbh20ujiRtjK1nPdtnZOSkWFoJ3OxZ_dLUtOdnMUgzCIaDJApY8uq6rivFCep98vJ1AXcCw5ZHMKwlbBur1UP7nL86xX3Yx'
	}
});