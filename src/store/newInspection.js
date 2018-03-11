import router from '../router';

export default {
  state: {
    windFarm : '',
    componentNumber : '',
    componentType : '',
    turbineNumber : '',
    checkListType : ''
  },
  getters: {
    windFarm: state => state.windFarm,
    componentNumber: state => state.componentNumber,
    componentType: state => state.componentType,
    turbineNumber: state => state.turbineNumber,
    checkListType: state => state.checkListType
  },

  mutations: {
    setWindFarm: (state, windFarm) => {
      state.windFarm = windFarm
    },
    setComponentNumber: (state, componentNumber) => {
      state.componentNumber = componentNumber
    },
    setComponentType: (state, componentType) => {
      state.componentType = componentType
    },
    setTurbineNumber: (state, turbineNumber) => {
      state.turbineNumber = turbineNumber
    },
    setCheckListType: (state, checkListType) => {
      state.checkListType = checkListType
    }
  },
  actions: {
    newInspection: function (context, payload) {
      console.log('PAYLOAD: ');
      console.log(payload);
      context.commit('setWindFarm', payload.selectedWindFarm);
      context.commit('setComponentNumber', payload.selectedComponentNumber);
      context.commit('setComponentType', payload.selectedComponentType);
      context.commit('setTurbineNumber', payload.selectedTurbineNumber);
      context.commit('setCheckListType', payload.selectedCheckListType);
    }
  }
}
