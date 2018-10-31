import { Component, OnInit } from '@angular/core';
import { UserData } from 'src/app/entity/user-data';
import { DecisionMakingService } from 'src/app/shared_service/decision-making.service';

@Component({
  selector: 'app-decision-making',
  templateUrl: './decision-making.component.html',
  styleUrls: ['./decision-making.component.css']
})
export class DecisionMakingComponent implements OnInit {
  
  private height:number = 0;
  private user = new UserData();
  private count:number = 0;

  constructor(private DecisionMakingController:DecisionMakingService) { }

  private gendercheck:boolean = false ;
  private agecheck:boolean = false ;
  private nationality:boolean = false ;
  private education:boolean = false ;
	private occupation:boolean = false ;
	private typeOfGamer:boolean = false ;
	private preferPlaying:boolean = false ;
	private easyToLearn:boolean = false ;
	private easyToPlay:boolean = false ;
	private challenging:boolean = false ;
	private lotsOfVariety:boolean = false ;
	private cooperative:boolean = false ;
	private completive:boolean = false ;
	private artWork:boolean = false ;
	private sports:boolean = false ;
	private gardening:boolean = false ;
	private watchingMovies:boolean = false ;
	private lottery:boolean = false ;
	private boardOrCard:boolean = false ;
	private puzzles:boolean = false ;
	private travel:boolean = false ;
	private readOrWrite:boolean = false ;
	private artsAndCrafts:boolean = false ;
	private shopping:boolean = false ;
	private socializing:boolean = false ;
	private whom:boolean = false ;
	private useLogic:boolean = false ;
	private multipleCharacters:boolean = false ;
	private buildingOrStructures:boolean = false ;
	private playerInteraction:boolean = false ;
	private takeThatAspects:boolean = false ;
	private upgradeable:boolean = false ;
	private defense:boolean = false ;
	private findingItems:boolean = false ;
	private collection:boolean = false ;
	private playerElimination:boolean = false ;
	private betting:boolean = false ;
	private negotiation:boolean = false ;
	private eventsOrTraps:boolean = false ;
	private relationships:boolean = false ;
	private solvingPuzzles:boolean = false ;
	private managingResources:boolean = false ;
	private controlMultiple:boolean = false ;
	private combo:boolean = false ;

  private ProgressBarType:String="";
  private StatusAccuracy:String="Accuracy Of Decision 0%";
  heightBar = '35px';

updateProgressColor(){ /*Set Color Progressbar and Set Status Progressbar*/
  if(this.height > 0 && this.height < 30){
    this.ProgressBarType = "danger"
    this.StatusAccuracy = "Accuracy Of Decision is "+this.height+"%"
  }else if(this.height >= 30 && this.height < 70){
    this.ProgressBarType = "warning"
    this.StatusAccuracy = "Accuracy Of Decision is "+this.height+"%"
  }else if(this.height >= 70){
    this.ProgressBarType = "success"
    this.StatusAccuracy = "Accuracy Of Decision is "+this.height+"%"
  }

}

  updateGenderProgressbar(){ /*Set Question1*/
  if(this.user.getGender() !== null && this.gendercheck == false){
    this.height = this.height+8;
    this.gendercheck = true;
    this.count = this.count+1;
  }this.updateProgressColor();
  }

  updateAgeProgressbar(){ /*Set Question2*/
    if(this.user.getAge() !== null && this.agecheck == false){
      this.height = this.height+8;
      this.agecheck = true;
      this.count = this.count+1;
    }this.updateProgressColor();
  }

  updateNationalityProgressbar(){ /*Set Question3*/
      if(this.user.getNationality() !== null && this.nationality == false){
        this.height = this.height+8;
        this.nationality = true;
        this.count = this.count+1;
    }this.updateProgressColor();
  }

  updateEducationProgressbar(){ /*Set Question4*/
    if(this.user.getEducation() !== null && this.education == false){
      this.height = this.height+8;
      this.education = true;
      this.count = this.count+1;
  }this.updateProgressColor();
}
updateOccupationProgressbar(){ /*Set Question5*/
  if(this.user.getOccupation() !== null && this.occupation == false){
    this.height = this.height+8;
    this.occupation = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateTypeOfGamerProgressbar(){ /*Set Question6*/
  if(this.user.getTypeOfGamer() !== null && this.typeOfGamer == false){
    this.height = this.height+8;
    this.typeOfGamer = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updatePreferPlayingProgressbar(){  /*Set Question7*/
  if(this.user.getPreferPlaying() !== null && this.preferPlaying == false){
    this.height = this.height+8;
    this.preferPlaying = true;
    this.count = this.count+1;
}this.updateProgressColor();
}

/*Set Question8*/
updateEasyToLearnProgressbar(){
  if(this.user.getEasyToLearn() !== null && this.easyToLearn == false){
    this.height = this.height+1;
    this.easyToLearn = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateEasyToPlayProgressbar(){
  if(this.user.getEasyToPlay() !== null && this.easyToPlay == false){
    this.height = this.height+1;
    this.easyToPlay = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateChallengingProgressbar(){
  if(this.user.getChallenging() !== null && this.challenging == false){
    this.height = this.height+1;
    this.challenging = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateLotsOfVarietyProgressbar(){
  if(this.user.getLotsOfVariety() !== null && this.lotsOfVariety == false){
    this.height = this.height+1;
    this.lotsOfVariety = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateCooperativeProgressbar(){
  if(this.user.getCooperative() !== null && this.cooperative == false){
    this.height = this.height+1;
    this.cooperative = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateCompletiveProgressbar(){
  if(this.user.getCompletive() !== null && this.completive == false){
    this.height = this.height+1;
    this.completive = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateArtWorkProgressbar(){
  if(this.user.getArtWork() !== null && this.artWork == false){
    this.height = this.height+1;
    this.artWork = true;
    this.count = this.count+1;
}this.updateProgressColor();
}



/*Set Question9*/
updateSportsProgressbar(){
  if(this.user.getSports() !== null && this.sports == false){
    this.height = this.height+1;
    this.sports = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateGardeningProgressbar(){
  if(this.user.getGardening() !== null && this.gardening == false){
    this.height = this.height+1;
    this.gardening = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateWatchingMoviesProgressbar(){
  if(this.user.getWatchingMovies() !== null && this.watchingMovies == false){
    this.height = this.height+1;
    this.watchingMovies = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateLotteryProgressbar(){
  if(this.user.getLottery() !== null && this.lottery == false){
    this.height = this.height+1;
    this.lottery = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateBoardOrCardProgressbar(){
  if(this.user.getBoardOrCard() !== null && this.boardOrCard == false){
    this.height = this.height+1;
    this.boardOrCard = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updatePuzzlesProgressbar(){
  if(this.user.getPuzzles() !== null && this.puzzles == false){
    this.height = this.height+1;
    this.puzzles = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateTravelProgressbar(){
  if(this.user.getTravel() !== null && this.travel == false){
    this.height = this.height+1;
    this.travel = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateReadOrWriteProgressbar(){
  if(this.user.getReadOrWrite() !== null && this.readOrWrite == false){
    this.height = this.height+1;
    this.readOrWrite = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateArtsAndCraftsProgressbar(){
  if(this.user.getArtsAndCrafts() !== null && this.artsAndCrafts == false){
    this.height = this.height+1;
    this.artsAndCrafts = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateShoppingProgressbar(){
  if(this.user.getShopping() !== null && this.shopping == false){
    this.height = this.height+1;
    this.shopping = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateSocializingProgressbar(){
  if(this.user.getSocializing() !== null && this.socializing == false){
    this.height = this.height+1;
    this.socializing = true;
    this.count = this.count+1;
}this.updateProgressColor();
}

/*Set Question10*/
updateWhomProgressbar(){
  if(this.user.getWhom() !== null && this.whom == false){
    this.height = this.height+8;
    this.whom = true;
    this.count = this.count+1;
}this.updateProgressColor();
}


/*Set Question11*/
updateUseLogicProgressbar(){
  if(this.user.getUseLogic() !== null && this.useLogic == false){
    this.height = this.height+1;
    this.useLogic = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateMultipleCharacters(){
  if(this.user.getMultipleCharacters() !== null && this.multipleCharacters == false){
    this.height = this.height+1;
    this.multipleCharacters = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateBuildingOrStructuresProgressbar(){
  if(this.user.getBuildingOrStructures() !== null && this.buildingOrStructures == false){
    this.height = this.height+1;
    this.buildingOrStructures = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updatePlayerInteractionProgressbar(){
  if(this.user.getPlayerInteraction() !== null && this.playerInteraction == false){
    this.height = this.height+1;
    this.playerInteraction = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateTakeThatAspectsProgressbar(){
  if(this.user.getTakeThatAspects() !== null && this.takeThatAspects == false){
    this.height = this.height+1;
    this.takeThatAspects = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateUpgradeableProgressbar(){
  if(this.user.getUpgradeable() !== null && this.upgradeable == false){
    this.height = this.height+1;
    this.upgradeable = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateDefenseProgressbar(){
  if(this.user.getDefense() !== null && this.defense == false){
    this.height = this.height+1;
    this.defense = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateFindingItemsProgressbar(){
  if(this.user.getFindingItems() !== null && this.findingItems == false){
    this.height = this.height+1;
    this.findingItems = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateCollectionProgressbar(){
  if(this.user.getCollection() !== null && this.collection == false){
    this.height = this.height+1;
    this.collection = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updatePlayerEliminationProgressbar(){
  if(this.user.getPlayerElimination() !== null && this.playerElimination == false){
    this.height = this.height+1;
    this.playerElimination = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateBettingProgressbar(){
  if(this.user.getBetting() !== null && this.betting == false){
    this.height = this.height+1;
    this.betting = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateNegotiationProgressbar(){
  if(this.user.getNegotiation() !== null && this.negotiation == false){
    this.height = this.height+1;
    this.negotiation = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateEventsOrTrapsProgressbar(){
  if(this.user.getEventsOrTraps() !== null && this.eventsOrTraps == false){
    this.height = this.height+1;
    this.eventsOrTraps = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateRelationshipsProgressbar(){
  if(this.user.getRelationships() !== null && this.relationships == false){
    this.height = this.height+1;
    this.relationships = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateSolvingPuzzlesProgressbar(){
  if(this.user.getSolvingPuzzles() !== null && this.solvingPuzzles == false){
    this.height = this.height+1;
    this.solvingPuzzles = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateManagingResourcesProgressbar(){
  if(this.user.getManagingResources() !== null && this.managingResources == false){
    this.height = this.height+1;
    this.managingResources = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateControlMultipleProgressbar(){
  if(this.user.getControlMultiple() !== null && this.controlMultiple == false){
    this.height = this.height+1;
    this.controlMultiple = true;
    this.count = this.count+1;
}this.updateProgressColor();
}
updateComboProgressbar(){
  if(this.user.getCombo() !== null && this.combo == false){
    this.height = this.height+1;
    this.combo = true;
    this.count = this.count+1;
}this.updateProgressColor();
}


  doPost(){
   
      this.DecisionMakingController.postUserData(this.user);
  
  }

  ngOnInit() {
  }

}
