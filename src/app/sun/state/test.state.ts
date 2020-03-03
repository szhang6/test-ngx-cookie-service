import { State, Action, StateContext } from '@ngxs/store';
import { TestAction } from './test.actions';

export class TestStateModel {
  public items: string[];
}

@State<TestStateModel>({
  name: 'test',
  defaults: {
    items: []
  }
})
export class TestState {
  @Action(TestAction)
  add(ctx: StateContext<TestStateModel>, action: TestAction) {
    const state = ctx.getState();
    ctx.setState({ items: [ ...state.items, action.payload ] });
  }
}
