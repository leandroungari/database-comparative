export default class Relational {
  constructor() {}

  async insert(collectionName, data) {
    //obter o model de algum jeito
    // chamar sync()
    // http://docs.sequelizejs.com/manual/models-definition.html
    try {
      for(const item of data) {
        const result = await this.model.create(item);
        console.log("insert", result);
      }

      return data.length;
    }
    catch(error) {
      console.log(error);
    }
    
    throw new Error("mysql insert error");
  }

  async read(collection, condition) {
    //obter o model de algum jeito
    // chamar sync()
    try {
      const result = await this.model
      .findAll({where: condition});
      console.log("read",result);
      return result;
    }
    catch(error) {
      console.log(error);
    }
    throw new Error("mysql read error");
  }

  async update(collection, condition, values) {
    //obter o model de algum jeito
    // chamar sync()
    try {
      const result = await this.model
      .update(values, {
        where: condition
      });
      console.log(result);
      return result;
    } 
    catch(error) {
      console.log(error);
    }

    throw new Error("mysql update error");
  }

  async delete(collection, condition) {
    //obter o model de algum jeito
    // chamar sync()
    try {
      const result = await this.model
      .destroy(condition);

      return result;
    }
    catch(error) {
      console.log(error);
    }

    throw new Error("mysql delete error");
  }
}