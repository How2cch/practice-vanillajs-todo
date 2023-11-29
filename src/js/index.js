import { TotalListService } from "./lib/totalListService";
import { DialogService } from "./lib/dialogService";
import { TodoCreateButtonsService } from "./lib/todoCreateButtonsService";
import { dialogFormStore } from "./store/dialogFormStore";
import { todoStore } from "./store/todoStore";
import { clockElement } from "./views/clock/clockElement";
import { totalListElement } from "./views/list/totalListElement";
import { dialogElement } from "./views/dialog/dialogElement";
import { todoCreateButtonElement } from "./views/todoCreateButtons/todoCreateButtonsElement";
import { dashboardListElement } from "./views/list/dashboardListElement";
import { DashboardListService } from "./lib/dashboardListService";
import { StatisticService } from "./lib/statisticService";
import { statisticElement } from "./views/statistic/statisticElement";

const dialogService = new DialogService( dialogFormStore, todoStore );
const todoCreateButtonsService = new TodoCreateButtonsService(dialogFormStore);
const totalListService = new TotalListService( todoStore, dialogFormStore );
const dashboardListService = new DashboardListService( todoStore, dialogFormStore );
const statisticService = new StatisticService( todoStore );

clockElement.init();
dialogElement.init(dialogService);
todoCreateButtonElement.init(todoCreateButtonsService);
totalListElement.init(totalListService);
dashboardListElement.init(dashboardListService);
statisticElement.init(statisticService);
