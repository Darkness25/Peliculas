import {
  CREATE_TUTORIAL,
  RETRIEVE_TUTORIALS,
  UPDATE_TUTORIAL,
  DELETE_TUTORIAL,
  DELETE_ALL_TUTORIALS,
  CREATE_CATEGORIA
} from "../types";

import TutorialDataService from "../services/TutorialService";

export const createTutorial = (id, nombre, duracion, link, idTipo) => async (dispatch) => {
  try {
    const res = await TutorialDataService.create({ id, nombre, duracion, link, idTipo });

    dispatch({
      type: CREATE_TUTORIAL,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const createCategoria = (id, nombre) => async (dispatch) => {
  try {
    const res = await TutorialDataService.create({ id, nombre });

    dispatch({
      type: CREATE_CATEGORIA,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const retrieveTutorials = () => async (dispatch) => {
  try {
    const res = await TutorialDataService.getAll();

    dispatch({
      type: RETRIEVE_TUTORIALS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const updateTutorial = (id, data) => async (dispatch) => {
  try {
    const res = await TutorialDataService.update(id, data);

    dispatch({
      type: UPDATE_TUTORIAL,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteTutorial = (id) => async (dispatch) => {
  try {
    await TutorialDataService.remove(id);

    dispatch({
      type: DELETE_TUTORIAL,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteAllTutorials = () => async (dispatch) => {
  try {
    const res = await TutorialDataService.removeAll();

    dispatch({
      type: DELETE_ALL_TUTORIALS,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const findTutorialsByTitle = (idTipo) => async (dispatch) => {
  try {
    const res = await TutorialDataService.findByTitle(idTipo);

    dispatch({
      type: RETRIEVE_TUTORIALS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
