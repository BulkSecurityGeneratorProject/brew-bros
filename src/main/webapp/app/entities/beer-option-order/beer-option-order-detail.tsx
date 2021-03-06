import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { ICrudGetAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntity } from './beer-option-order.reducer';
import { IBeerOptionOrder } from 'app/shared/model/beer-option-order.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IBeerOptionOrderDetailProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class BeerOptionOrderDetail extends React.Component<IBeerOptionOrderDetailProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  render() {
    const { beerOptionOrderEntity } = this.props;
    return (
      <Row>
        <Col md="8">
          <h2>
            BeerOptionOrder [<b>{beerOptionOrderEntity.id}</b>]
          </h2>
          <dl className="jh-entity-details">
            <dt>
              <span id="amount">Amount</span>
            </dt>
            <dd>{beerOptionOrderEntity.amount}</dd>
            <dt>Order</dt>
            <dd>{beerOptionOrderEntity.order ? beerOptionOrderEntity.order.placedDateTime : ''}</dd>
            <dt>Beer Option</dt>
            <dd>{beerOptionOrderEntity.beerOption ? beerOptionOrderEntity.beerOption.name : ''}</dd>
          </dl>
          <Button tag={Link} to="/entity/beer-option-order" replace color="info">
            <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
          </Button>
          &nbsp;
          <Button tag={Link} to={`/entity/beer-option-order/${beerOptionOrderEntity.id}/edit`} replace color="primary">
            <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
          </Button>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = ({ beerOptionOrder }: IRootState) => ({
  beerOptionOrderEntity: beerOptionOrder.entity
});

const mapDispatchToProps = { getEntity };

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeerOptionOrderDetail);
