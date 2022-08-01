import client from "../../client";

export default {
  Query: {
    searchBrand: async (_, { brandName, startDate, endDate }) => {
      console.log(brandName);
      const Brands = await client.brand.findMany({
        where: {
          brandName: {
            contains: brandName,
          },

          // createdAt: {
          //   lt: startDate,
          //   gte: endDate,
          // },
        },
      });
      return Brands;
    },
  },
};
