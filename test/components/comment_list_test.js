import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
  let component;

  beforeEach(() => {
    const props = { comments: ['new comment', 'other new'] };
    component = renderComponent(CommentList, null, props);
  });

  it('has the correct class name', () => {
    expect(component).to.have.class('comment-list');
  });

  it('shows an LI for each comment', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('new comment');
    expect(component).to.contain('other new');
  });
});
