import {UIManager} from "./uiManager";
import {InventoryManager} from "./inventoryManager";
import {DialogManager} from "./dialogManager";
import {MasterSequencer} from "./masterSequencer";
import {KeyboardManager} from "./keyboardManager";
import {ControllerManager} from "./controllerManager";
import {ModalManager} from "./modalManager";

//--------------------------
export class GameManager {
  constructor(PIxiComponents){      

      //-------------------------------------------------------------------  PULLS IN PIXI COMPONENTS
      this.PixiContainers = PIxiComponents  
      //-------------------------------------------------------------------

      //-------------------------------------------------------------------  SETUP UI MANAGER
      this.UIManager = new UIManager({
        inventoryele: document.querySelector(".game-inventory"),
        inventorybtn: document.querySelector(".game-inventory-btn"),
        inventoryDefaultState: false,

        menuele: document.querySelector(".game-menu"),
        menubtn: document.querySelector(".game-menu-btn"),
        menuDefaultState: false,

        closeall: document.querySelector(".game-closeall")
      });    
      this.UIManager.setDefaultStates()
      //-------------------------------------------------------------------

      //------------------------------------------------------------------- SETUP INVENTORY MANAGER
      // setup inventory
      this.InventoryManager = new InventoryManager({
        container: document.querySelector(".game-item-container")
      })
      //-------------------------------------------------------------------

      //------------------------------------------------------------------- SETUP MODAL MANAGER
      // setup inventory      
      this.ModalManager = new ModalManager({
        container: document.querySelector(".game-modal-container")
      })
      //-------------------------------------------------------------------

      //-------------------------------------------------------------------  ADD DIALOG MANAGER
      this.DialogManager = new DialogManager({
        container: document.querySelector(".game-dialog-modal"),  
        speaker: document.querySelector(".game-dialog-modal .speaker p"),  
        content: document.querySelector(".game-dialog-modal .content p"),  
      })      
      //-------------------------------------------------------------------

      //-------------------------------------------------------------------  ADDS KEYBOARD MANAGER
      this.KeyboardManager = new KeyboardManager();
      this.KeyboardManager.reassignThresholds({long: 300})
      //-------------------------------------------------------------------

      //-------------------------------------------------------------------
      this.ControllerManager = new ControllerManager(this.KeyboardManager, false)
      clearInterval(window.controllerManagerInterval)
      //-------------------------------------------------------------------

      //-------------------------------------------------------------------  ADD MASTER SEQUENCER
      this.MasterSequencer = new MasterSequencer()
      //-------------------------------------------------------------------

      
      return {
        PixiContainers: this.PixiContainers,
        MasterSequencer: this.MasterSequencer,
        UIManager: this.UIManager,
        InventoryManager: this.InventoryManager,
        DialogManager: this.DialogManager,
        KeyboardManager: this.KeyboardManager,
        ControllerManager: this.ControllerManager,
        ModalManager: this.ModalManager
      }
  }

  



}
//--------------------------

