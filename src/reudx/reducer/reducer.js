/* eslint-disable no-undef */
/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import { CLEAN_DETAIL, GET_POKEMONS,SET_ORIGIN_API,SET_ORIGIN ,SET_ORIGIN_DB,GET_TYPES,POKEMON_DETAIL, CLEAR_SEARCH,FILTER_TYPES, ORDER_AZ, CLEAR_TYPES, GET_POKENAME , FILTER_ATTACK, CREATE_POKEMON, CREATE_IMAGE, ORDER_FN, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT, CREATE_USER_SUCCESS, CREATE_USER_FAILURE, ORDER_ATT, FILTER_POKEMON  } from "../actions/action-types";

const initialState ={
    allPokemons: [],
    filterPokemon:[],
    pokemonDetail:{}, //{}
    types:[],
    newPokemons:[],
    img:[],  
    order:[],
    user: null,
    error:null,
    access: false,
    
}


const reducer = (state = initialState, action) =>{
    switch(action.type){
        case GET_POKEMONS:
            return{
                ...state,
                allPokemons: action.payload,
                filterPokemon:action.payload
                
            }
        case GET_POKENAME:
            return{
                ...state,
                filterPokemon:[action.payload],
            }       

        case POKEMON_DETAIL:
            return{
                ...state,
                pokemonDetail: action.payload
            }
        case CLEAN_DETAIL:
            return{
                ...state,
                pokemonDetail:{}
            }
        
        case GET_TYPES:
            return{
                ...state,
                types:action.payload
            }
            
        case FILTER_TYPES:
            return{
                ...state,
                filterPokemon: action.payload
            }

        case CLEAR_TYPES:
            return {
                ...state,
                filterPokemon: state.allPokemons
                
            };  
        case ORDER_AZ:
          
            return{
                ...state,
                order:action.payload
               
            }

        case ORDER_FN:
            const sortFunctions = {
                    "A-Z": (a, b) => a.name.localeCompare(b.name),
                    "Z-A": (a, b) => b.name.localeCompare(a.name),
                };
    
                let sortedPokemons= state.filterPokemon 
                
                if (sortFunctions[state.order]) {
                    sortedPokemons = state.filterPokemon.sort(sortFunctions[state.order]) 
                    
                }

            return{
                ...state,
                filterPokemon: sortedPokemons
            }

        case FILTER_ATTACK:
            
            return{
                ...state,
                filterPokemon:action.payload
            }

        case ORDER_ATT:
            const orderAttack = {
                "A-Z": (a, b) => a.name.localeCompare(b.name),
                "Z-A": (a, b) => b.name.localeCompare(a.name),
            };

            let orderedAttack= state.filterPokemon 
            
            if (orderAttack[state.order]) {
                orderedAttack = state.filterPokemon.sort(orderAttack[state.order]) 
                
            }

            return{
                ...state,
                filterPokemon:orderedAttack
            }   
            
            //corregir filtro combinando api + types + strong - hacer un nuevo case
            case FILTER_POKEMON:
                return {
                  ...state,
                  filterPokemon: action.payload,
                };  
       
        case CREATE_POKEMON:
            return{
                ...state,
                newPokemons: action.payload
            }

        case CREATE_IMAGE:
            return{
                ...state,
                img: action.payload
            }
            
        case CLEAR_SEARCH:
            return {
                ...state,
                allPokemons:[]
            };

        case SET_ORIGIN_DB:
            
            return {
                ...state,
                filterPokemon: action.payload,
            }
                    
        case SET_ORIGIN_API:
            return {
                ...state,
                filterPokemon: action.payload,
            }
        case SET_ORIGIN:
            return {
                ...state,
                filterPokemon: action.payload,
            }

        case CREATE_USER_SUCCESS:
            return{
                ...state,
                error:null
            }
        case CREATE_USER_FAILURE:
            return{
                ...state,
                error: action.error
            }

        case LOG_IN_SUCCESS:
            return{
                ...state,
                user: action.payload,
                acces: true,
                error:null
            }
        case LOG_IN_FAILURE:
            return{
                ...state,
                error: action.error,
            }
        case LOG_OUT:
            return{
                ...state,
                acces:false,
                user:null
            }

        default:
            return{
                ...state
            }
    }
}

export default reducer;